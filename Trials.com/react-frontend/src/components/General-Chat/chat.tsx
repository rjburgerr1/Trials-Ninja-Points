import { Field, Form, FormikProvider, useFormik } from "formik";
import { useEffect, useState, useContext, useRef } from "react";
import { SocketProvider } from "../../contexts/socket-context";
import { useAuth } from "../../contexts/auth-context";
import "../../styling/chat.scss";
import date from "date-and-time";

interface messages {
    user: string;
    message: string;
    messageTime: string;
}

const Chat = () => {
    const { currentUser } = useAuth();
    const [messages, setMessages] = useState<Array<messages>>([]);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const socket = useRef(useContext(SocketProvider));

    useEffect(() => {
        socket.current.on("message_response", (messagePayload: messages) => {
            setMessages((messages) => [messagePayload, ...messages]);
        });

        return () => {
            // Before component is destroyed, disconnect socket
            socket.current.disconnect(); //.current is okay here
        };
    }, []);

    const messageForm = useFormik({
        initialValues: {
            message: "",
        },
        onSubmit: (chat, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            if (chat.message.length > 0) {
                const now = new Date();
                const time = date.format(now, "hh:mm:ss.SSS A");

                let payload = {
                    user: currentUser.displayName,
                    messageTime: time,
                    message: chat.message,
                };
                socket.current.emit("message_request", payload);
            }
            resetForm();
            setSubmitting(false);
        },
    });

    const scrollToTop = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToTop();
    }, [messages]);

    // FormikProvider is used to give formik context with useFormik hook. Less verbosity, clearer syntax :)
    return (
        <div className="chat">
            <div ref={messagesEndRef} />
            <FormikProvider value={messageForm}>
                <Form className="chat-send-message">
                    <Field
                        className="chat-send-message-input"
                        id="message"
                        name="message"
                        placeholder="Send a message here"
                    />
                    <input
                        className="chat-send-message-button"
                        type="submit"
                        value="Send"
                        disabled={messageForm.isSubmitting}
                    />
                </Form>
            </FormikProvider>
            <div className="chat-message-body">
                {messages.map((message) => {
                    return (
                        <div
                            className="chat-message-container"
                            key={message.messageTime}
                        >
                            <span className="chat-username">
                                {message.user}
                            </span>
                            <span className="chat-message">
                                {message.message}
                            </span>
                            <p className="chat-time">
                                {message.messageTime.substr(
                                    0,
                                    message.messageTime.length - 10
                                ) +
                                    message.messageTime.substr(
                                        message.messageTime.length - 3,
                                        message.messageTime.length
                                    )}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export { Chat };

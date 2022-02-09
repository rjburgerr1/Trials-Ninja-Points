import ResetPassword from "../components/auth/reset-password";

export default function ForgotPassword(props: any) {
    return (
        <div className="page-container">
            <div className="page-body" id="forgot-password-page-body">
                <div className="page-content">
                    <ResetPassword />
                </div>
            </div>
        </div>
    );
}

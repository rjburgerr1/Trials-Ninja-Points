// yup-extended.ts
import * as yup from "yup";
import { AnyObject, Maybe } from "yup/lib/types";

yup.addMethod<yup.StringSchema>(yup.string, "emptyAsUndefined", function () {
    return this.transform((value) => (value ? value : undefined));
});

yup.addMethod<yup.NumberSchema>(yup.number, "emptyAsUndefined", function () {
    return this.transform((value, originalValue) =>
        String(originalValue)?.trim() ? value : undefined
    );
});

yup.addMethod<yup.StringSchema>(yup.string, "isValidYoutubeURL", function () {
    const ytVideoRegEx =
        /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;

    return this.transform((value, originalValue) => {
        const videoURLError = new yup.ValidationError(
            "Video URL invalid",
            value,
            "video",
            "is-valid"
        );

        if (value) {
            let match = value.match(ytVideoRegEx);

            if (match && match[2].length === 11) {
                console.log(match[2]);
                return match[2];
            } else {
                throw videoURLError;
            }
        }
        throw videoURLError;
    });
    // return this.transform({
    //     test: (value) => {
    //         if (value) {
    //             let match = value.match(regExp);
    //             return undefined;
    //             //return match && match[2].length === 11 ? "das" : "";
    //         }
    //         return undefined;
    //         //return "";
    //     },
    // });
});

declare module "yup" {
    interface StringSchema<
        TType extends Maybe<string> = string | undefined,
        TContext extends AnyObject = AnyObject,
        TOut extends TType = TType
    > extends yup.BaseSchema<TType, TContext, TOut> {
        emptyAsUndefined(): StringSchema<TType, TContext>;
    }

    interface NumberSchema<
        TType extends Maybe<number> = number | undefined,
        TContext extends AnyObject = AnyObject,
        TOut extends TType = TType
    > extends yup.BaseSchema<TType, TContext, TOut> {
        emptyAsUndefined(): NumberSchema<TType, TContext>;
    }

    interface StringSchema<
        TType extends Maybe<string> = string | undefined,
        TContext extends AnyObject = AnyObject,
        TOut extends TType = TType
    > extends yup.BaseSchema<TType, TContext, TOut> {
        isValidYoutubeURL(): StringSchema<TType, TContext>;
    }
}

export default yup;

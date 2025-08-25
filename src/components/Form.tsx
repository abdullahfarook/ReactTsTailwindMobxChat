
import { IForm } from "@/models/iform";
import { TResult } from "@/models/result";
import { Form, Formik, FormikValues } from "formik";

export type FormProps<T> = {
    data: IForm<T>;
    onSubmit: (values: T) => any;
    children?: React.ReactNode;
}
export function InputForm<T extends FormikValues>(props: FormProps<T>) {
    const { data, onSubmit, children } = props;
    function isTResult<T>(obj: any): obj is TResult<T> {
        return (
            obj !== null &&
            typeof obj === "object" &&
            typeof obj.success === "boolean" &&
            ("data" in obj || "message" in obj)
        );
    }

    const submitForm = async (values: T) => {
        data.setError(null);
        const result = await onSubmit(values);
        if (isTResult(result)) {
            if (!result.success) {
                data.setError(result.message ?? null);
            }
        }
    }
    return (
        <Formik<T>
            initialValues={data.model}
            validate={data.validate}
            onSubmit={submitForm}>
            <Form>
                {children}
            </Form>
        </Formik>
    )
}
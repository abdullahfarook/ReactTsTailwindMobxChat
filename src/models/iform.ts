import { ValidationErrors, Validator } from "fluentvalidation-ts";
import { makeObservable, observable, action, runInAction } from "mobx";

export interface IForm<TModel> {
    model: TModel;
    submitError?: string | null;
    setSubmitError(value: string | null): void;
    validateForm(value: TModel): ValidationErrors<TModel>;
}

export abstract class FormValidator<TModel> extends Validator<TModel> implements IForm<TModel> {
    abstract model: TModel;
    submitError?: string | null | undefined;
    isValid = true;

    fields = this.fieldsFactory<TModel>();
    setSubmitError(value: string | null): void {
        this.submitError = value;
    }

    constructor() {
        super();
        makeObservable(this, {
            submitError: observable,
            isValid: observable,
            setSubmitError: action,
        });
    }

    validateForm(value: TModel): ValidationErrors<TModel> {
        this.model = value;
        const errors = this.validate(value);
        runInAction (()=> this.isValid = !this.hasErrors(errors));
        return errors;
    }

    private hasErrors(errors: unknown): boolean {
        if (!errors) return false;

        // string = error message
        if (typeof errors === "string") return true;

        // array = check any element
        if (Array.isArray(errors)) {
            return errors.some(e => this.hasErrors(e));
        }

        // object = check any property
        if (typeof errors === "object") {
            return Object.values(errors).some(e => this.hasErrors(e));
        }

        return false;
    }
    
    private fieldsFactory<T>() {
        return <K extends keyof T>(key: K) => key;
    }
}



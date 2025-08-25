import { ValidationErrors, Validator } from "fluentvalidation-ts";
import { makeObservable, observable, action } from "mobx";

export interface IForm<TModel> {
    model: TModel;
    submitError?: string | null;
    setError(value: string | null): void;
    validate: (value: TModel) => ValidationErrors<TModel>;
}



export class FormValidator<TModel> extends Validator<TModel> implements IForm<TModel> {
    model: TModel = {} as TModel;
    submitError?: string | null | undefined;
    fields = this.fieldsFactory<TModel>();
    setError(value: string | null): void {
        this.submitError = value;
    }
    constructor() {
        super();
        makeObservable(this, {
            submitError: observable,
            setError: action,
        });
    }
    fieldsFactory<T>() {
        return <K extends keyof T>(key: K) => key;
    }
}



import Joi from "joi";
import { v4 as uuidv4 } from "uuid";

interface INote {
	id?: string;
	title: string;
	body: string;
}

class Note implements INote {
	id: string;
	private _title: string;
	private _body: string;

	constructor(title: string, body: string) {
		const schema = Joi.object({
			title: Joi.string().min(4).required().empty(),
			body: Joi.string().required().empty(),
		});

		const { error } = schema.validate({ title, body });
		if (error) {
			throw error;
		}

		this.id = uuidv4();
		this._title = title;
		this._body = body;
	}

	get title(): string {
		return this._title;
	}

	set title(value: string) {
		const { error } = Joi.string().min(4).validate(value);
		if (error) {
			throw new Error(error.details[0].message);
		}
		this._title = value;
	}

	get body(): string {
		return this._body;
	}

	set body(value: string) {
		const { error } = Joi.string().validate(value);
		if (error) {
			throw new Error(error.details[0].message);
		}
		this._body = value;
	}
}
export default Note;

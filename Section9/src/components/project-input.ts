import Component from "./base-component.js";
import * as Validation from "../util/validation.js";
import { AutoBind } from "../decorators/autobind.js";
import { projectState as ProjectState } from "../state/project-state.js";

export default class ProjectInput extends Component<HTMLDivElement, HTMLFormElement>{
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
        super('project-input', 'app', true, 'user-input');
        this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;
        this.configure();
    }

    renderContent() { }

    private clearInputs() {
        this.titleInputElement.value = ''
        this.descriptionInputElement.value = ''
        this.peopleInputElement.value = ''
    }

    private gatherUserInput(): [string, string, number] | void {
        const title = this.titleInputElement.value;
        const description = this.descriptionInputElement.value;
        const people = this.peopleInputElement.value;

        if (
            !Validation.validate({ value: title, required: true, minLength: 5 }) ||
            !Validation.validate({ value: description, required: true, minLength: 5 }) ||
            !Validation.validate({ value: +people, required: true, min: 1, max: 5 })
        ) {
            alert('Invalid input, try again');
            return;
        } else {
            return [title, description, +people];
        }
    }

    @AutoBind
    private submitHandler(event: Event) {
        event.preventDefault();

        const userInput = this.gatherUserInput();

        if (Array.isArray(userInput)) {
            const [title, desc, people] = userInput;
            ProjectState.addProject(title, desc, people);
            this.clearInputs()
        }
    }

    configure() {
        this.element.addEventListener('submit', this.submitHandler);
    }
}

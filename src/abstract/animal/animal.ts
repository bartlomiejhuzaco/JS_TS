export default abstract class Animal {
    constructor(
        protected _weight: number,
        protected _height: number,
        protected _color: string
    ) {}

    whoAreYou(): void {}
}
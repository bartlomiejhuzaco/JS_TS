// const date: Date = new Date();
// // console.log(date);

// const day: string = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate().toString();
// const month: string = (date.getMonth() + 1) < 10 ? `0${(date.getMonth() + 1)}` : (date.getMonth() + 1).toString();
// const year: string = date.getFullYear().toString();

// const hours: string = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours().toString();
// const minutes: string = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes().toString();
// const seconds: string = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds().toString();

// // console.log(day, month, year);

// const newDate: Date = new Date(`${year}-${month}-${day}`); // "YYYY-MM-DD"
// // console.log(newDate);

// // TIME
// const newDateTime: Date = new Date(`${year}-${month}-${day}T${hours}:${minutes}:${seconds}`); // "YYYY-MM-DDTHH:MM:SS"
// // console.log(newDateTime);

// // 1 Stycznia 1970
// newDateTime.setTime(newDateTime.getTime() - 10 * 365.25 * 24 * 60 * 60 * 1000);

// const time1 = newDateTime.getTime(); // STARSZY
// // console.log(time1);

// const time2 = new Date().getTime(); // MŁODSZY

// console.log(time1 > time2); // czy jest młodsze time2
// console.log(time1 < time2); // czy jest starsze time1
// console.log(time1 === time2); // czy jest takie same

const dateInput = document.getElementById("dateInput") as HTMLInputElement;
const dateTimeInput = document.getElementById("dateTimeInput") as HTMLInputElement;

dateInput.addEventListener("change", (event: any) => {
    console.log(event.currentTarget.value)
})

dateTimeInput.addEventListener("change", (event: any) => {
    console.log(event.currentTarget.value);
    const d: Date = new Date(event.currentTarget.value);
    console.log(d);
})
export default function ActiveHeading() {
  for (let i: number = 1; i <= 6; i++) {
    const element: any = document.getElementById(`${i}`);

    const lastElement: any = document.getElementById(`${i - 1}`)

    if (i - 1 >= 1) {
      lastElement.classList.remove('active__heading');
    } else {
      document.getElementById('6')?.classList.remove('active__heading');
    }

    if (i < 6) {
      element.classList.add('active__heading');
    } else {
      element.classList.add('active__heading');
      i = 1;
    }
  }
}
const calendar = (selectorEvent) => {
    const btnEvent = document.querySelector(selectorEvent);

    btnEvent.addEventListener('click' , () => {
        console.log('1');
    });
};

export default calendar;
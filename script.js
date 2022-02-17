const items = document.querySelectorAll('li');

window.addEventListener('scroll', scrolling);

function scrolling()
{
    const triggerBotton = window.innerHeight * (4 / 5);
    items.forEach(item =>
    {
        const itemTop = item.getBoundingClientRect().top;
        if (triggerBotton > itemTop)
        {
            item.classList.add('show');
        }
        else
        {
            item.classList.remove('show');
        }
    })
}
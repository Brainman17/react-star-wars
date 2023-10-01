export const changeCssVariables = theme => {
    const root = document.querySelector(':root');

    const cssVariables = ['header', 'bgimage'];

    cssVariables.forEach(el => {
        root.style.setProperty(`--theme-default-${el}`, `var(--theme-${theme}-${el})`);
    })

    // root.style.setProperty('--theme-default-header', `var(--theme-${theme}-header)`);
    // root.style.setProperty('--theme-default-bgimage', `var(--theme-${theme}-bgimage)`);
}

// --theme-neutral-header: #cccc46;
// --theme-dark-header: #ca6c6f;
// --theme-light-header: #dfe2df;
function supportingFunction1 () {}
function supportingFunction2 () {}
function supportingFunction3 () {}

function main (content) {
    supportingFunction1 ();
    supportingFunction2 ();
    supportingFunction3 ();
    console.log(content)
    return content;
}

module.exports = {
    main: main
};
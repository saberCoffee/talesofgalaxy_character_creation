export default function ({
    type,
    path,
    appendTo,
    complete
} = {}) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", path, true);
    if (xhr.overrideMimeType) {xhr.overrideMimeType("image/svg+xml")}
    xhr.onload = function(e) {
        appendTo.appendChild(xhr.responseXML.documentElement);

        if (complete)
        complete();
    }
    xhr.send();
}

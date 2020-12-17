window.onload = function() {
    var rootSwaggerDiv = document.getElementById("swagger-ui");
    var rootObserver = new MutationObserver(function (mutationsList, observer) {
        console.log("Jake Taemoon Jo");
        var elementToObserve = document.getElementsByClassName("model-box");
        var observer = new MutationObserver(function (mutationsList, observer) {
            var properties = document.getElementsByClassName("property");
            var arr = [].slice.call(properties);
            properties = arr.filter(
                (property) => property.className == "property",
            );
            properties.forEach((property) => {
                property.innerText = property.innerText
                    .replace("OrderedMap ", "")
                    .replace(
                        /, "\$\$ref"\: "#\/components\/examples\/([A-Za-z].*)\"/g,
                        "",
                    );
            });
        });
        for (let i = 0; i < elementToObserve.length; i++) {
            if (elementToObserve[i].tagName == "SPAN") {
                observer.observe(elementToObserve[i], {
                    characterData: true,
                    childList: true,
                    attributes: true,
                });
            }
        }
    });
    rootObserver.observe(rootSwaggerDiv, {
        characterData: true,
        childList: true,
        attributes: true,
    });
}

var SEED_PRODUCTS = [
    {
        id: "1",
        title: "smart watch",
        price: 4999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmlVdPnBryK0-ynA5R2ZJlUn9RczM5_wnqnApxq2iB6g&s=10 "
        },
    {
        id: "2",
        title: "Headphones",
        price: 3999,
        image: "https://encrypted-tbn0.gstatic.com/X?q=tbn:ANd9GcSrc6D8BCUwCobInKc3W1wgkPXYADjaDb7NgJKBJm8Aag&s=10"
    },
    {
        id: "3",
        title: "bag",
        price: 1050,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFnHHeHGVtzDQHiaaSpE1zlIwtleaCLc5RemaMGUPdOg&s=10"
    },
    {
        id: "4",
        title: "Bottle",
        price: 349,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2GkLHdfAn8EhfvFu4XbBjyb1VrW7uq3W-kAISiXXY_Q&s=10"
    },
    {
        id: "5",
        title: "glass",
        price: 1999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRozDj13Kmobkmo_d63pn9uKXbe3w4N-8zqPeS6Peb8jA&s=10"
    },
    {
        id: "6",
        title: "goggles stylish",
        price: 999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQncfpqLCRW_zDNzXEhKWRtYfkFFyoTw1CbezAKQaDAPA&s=10"
    },
    {
        id: "7",
        title: "shirt",
        price: 999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNvNmQvxq1vKUHO6gMhHIWChVRpWpXcoFHOTqb6_Y0aw&s=10"
    },
    {
        id: "8",
        title: "shoes",
        price: 2499,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPOe1nXR7gESvQ6WeaWuY0CtPEVn26nLtHw3o3DZsYGg&s=10"
    },
    {
        id: "9",
        title: "macbook",
        price: 29999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-fLdn_fgroucwyMeaLKphFHjku6D2IXHaROQ9TYZX5w&s=10"
    },
    {
        id: "10",
        title: " Mouse",
        price: 499.56,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbgtuFMGIoNOq-3e5CvvSxMFtv2hxIsjbpmbl1vuT9dQ&s=10"
    },
    
];

var KEY_PRODUCTS = "products";
var KEY_ADD = "addProductStorage";
var KEY_EDIT = "editProductStorage";
var KEY_DELETE = "deleteProductStorage";
var KEY_SORT = "sortStorage";
var KEY_SEARCH = "searchStorage";

var editingId;

function getStoredProducts() {
    var storedValue = localStorage.getItem(KEY_PRODUCTS);
    var products = JSON.parse(storedValue);

    if (!Array.isArray(products)) {
        products = SEED_PRODUCTS.slice();
        localStorage.setItem(KEY_PRODUCTS, JSON.stringify(products));
    }

    return products;
}

function initProducts() {

    if (!localStorage.getItem(KEY_PRODUCTS)) {
        localStorage.setItem(KEY_PRODUCTS, JSON.stringify(SEED_PRODUCTS));
    } else {
        getStoredProducts();
    }

    if (!localStorage.getItem(KEY_ADD)) {
        localStorage.setItem(KEY_ADD, JSON.stringify(null));
    }
    if (!localStorage.getItem(KEY_EDIT)) {
        localStorage.setItem(KEY_EDIT, JSON.stringify(null));
    }
    if (!localStorage.getItem(KEY_DELETE)) {
        localStorage.setItem(KEY_DELETE, JSON.stringify(null));
    }
    if (!localStorage.getItem(KEY_SORT)) {
        localStorage.setItem(KEY_SORT, JSON.stringify({ preference: "", result: SEED_PRODUCTS }));
    }
    if (!localStorage.getItem(KEY_SEARCH)) {
        localStorage.setItem(KEY_SEARCH, "");
    }
}

function sortProducts(parameter) {
    var savedSortRaw = localStorage.getItem(KEY_SORT);
    var savedSort;

    if (savedSortRaw) {
        savedSort = JSON.parse(savedSortRaw);
    } else {
        savedSort = {};
    }

    var preference;

    if (savedSort.preference) {
        preference = savedSort.preference;
    } else {
        preference = "";
    }

    if (parameter !== undefined) {
        preference = parameter;
    }

    var dropdown = document.querySelector(".dropdown");
    if (dropdown) {
        // dropdown ni value setAttribute thi set kari chhe
        dropdown.setAttribute("value", preference);
        dropdown.value = preference; // select element ma displayed value sync rakhva mate jaruri
    }

    var products = getStoredProducts();
    var sorted = products.slice();

    if (preference === "Price : Low to High") {
        sorted.sort(function (a, b) {
            return a.price - b.price;
        });
    } else if (preference === "Price : High to Low") {
        sorted.sort(function (a, b) {
            return b.price - a.price;
        });
    }

    localStorage.setItem(KEY_SORT, JSON.stringify({ preference: preference, result: sorted }));

    addProductToList();
}

function addProductToList() {
    var grid = document.querySelector("#grid");
    var emptyState = document.querySelector("#emptyState");
    var countLabel = document.querySelector("#countLabel");

    var sortDataRaw = localStorage.getItem(KEY_SORT);
    var sortData;

    if (sortDataRaw) {
        sortData = JSON.parse(sortDataRaw);
    } else {
        sortData = { result: [] };
    }

    var products;
    if (Array.isArray(sortData.result)) {
        products = sortData.result;
    } else {
        products = [];
    }

    grid.innerHTML = "";

    if (products.length === 0) {
        emptyState.setAttribute("style", "display: block;");
        grid.setAttribute("style", "display: none;");
    } else {
        emptyState.setAttribute("style", "display: none;");
        grid.setAttribute("style", "display: grid;");
    }

    if (products.length === 1) {
        countLabel.innerText = products.length + " product";
    } else {
        countLabel.innerText = products.length + " products";
    }

    for (var i = 0; i < products.length; i++) {
        var element = products[i];

        var div = document.createElement("div");
        div.setAttribute("class", "tag-card");
        div.setAttribute("id", element.id);

        var img = document.createElement("img");
        img.setAttribute("src", element.image);
        img.setAttribute("alt", element.title);

        var h3 = document.createElement("h3");
        h3.setAttribute("class", "tag-title");
        h3.append(element.title);

        var h5 = document.createElement("h5");
        h5.setAttribute("class", "tag-price");
        h5.append("₹" + element.price);

        var actions = document.createElement("div");
        actions.setAttribute("class", "tag-actions");

        var editBtn = document.createElement("button");
        editBtn.setAttribute("class", "icon-btn edit-btn");
        editBtn.innerText = "Edit";

        var deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("class", "icon-btn delete-btn");
        deleteBtn.innerText = "Delete";

        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(h5);
        div.appendChild(actions);

        grid.appendChild(div);
    }

    applyStoredSearch();
}

function openForm(mode, product) {
    var overlay = document.querySelector("#formOverlay");
    var formTitle = document.querySelector("#formTitle");
    var saveBtn = document.querySelector("#saveBtn");

    document.querySelector("#titleError").classList.remove("show");
    document.querySelector("#priceError").classList.remove("show");

    var titleInput = document.querySelector("#titleInput");
    var priceInput = document.querySelector("#priceInput");
    var imageInput = document.querySelector("#imageInput");

    if (mode === "edit" && product) {
        editingId = product.id;
        formTitle.innerText = "Edit Product";
        saveBtn.innerText = "Save Changes";

        // input ni current displayed value setAttribute + value property banne thi sync kari chhe
        titleInput.setAttribute("value", product.title);
        titleInput.value = product.title;

        priceInput.setAttribute("value", product.price);
        priceInput.value = product.price;

        imageInput.setAttribute("value", product.image);
        imageInput.value = product.image;
    } else {
        editingId = null;
        formTitle.innerText = "New Product";
        saveBtn.innerText = "Add Product";

        titleInput.setAttribute("value", "");
        titleInput.value = "";

        priceInput.setAttribute("value", "");
        priceInput.value = "";

        imageInput.setAttribute("value", "");
        imageInput.value = "";
    }

    overlay.classList.add("open");
    titleInput.focus();
}

function closeForm() {
    document.querySelector("#formOverlay").classList.remove("open");
    editingId = null;
}

function validateForm() {
    var titleInput = document.querySelector("#titleInput");
    var priceInput = document.querySelector("#priceInput");
    var titleError = document.querySelector("#titleError");
    var priceError = document.querySelector("#priceError");

    var title = titleInput.value.trim();
    var price = parseFloat(priceInput.value);

    var valid = true;

    if (!title) {
        titleError.classList.add("show");
        valid = false;
    } else {
        titleError.classList.remove("show");
    }

    if (isNaN(price) || price <= 0) {
        priceError.classList.add("show");
        valid = false;
    } else {
        priceError.classList.remove("show");
    }

    return valid;
}

function addProduct() {
    var isValid = validateForm();
    if (!isValid) {
        return;
    }

    var title = document.querySelector("#titleInput").value.trim();
    var price = parseFloat(document.querySelector("#priceInput").value);
    var image = document.querySelector("#imageInput").value.trim();

    var roundedPrice = parseInt(price * 100) / 100;

    var products = getStoredProducts();

    var formattedProduct = {
        id: (products.length).toString(),
        title: title,
        price: roundedPrice,
        image: image
    };

    products.push(formattedProduct);
    localStorage.setItem(KEY_PRODUCTS, JSON.stringify(products));

    localStorage.setItem(KEY_ADD, JSON.stringify(formattedProduct));

    closeForm();
    sortProducts();
}

function editProduct() {
    var isValid = validateForm();
    if (!isValid) {
        return;
    }

    var title = document.querySelector("#titleInput").value.trim();
    var price = parseFloat(document.querySelector("#priceInput").value);
    var image = document.querySelector("#imageInput").value.trim();

    var roundedPrice = parseFloat(price * 100) / 100;

    var products = getStoredProducts();
    var updated = [];

    for (var i = 0; i < products.length; i++) {
        var item = products[i];

        if (item.id === editingId) {
            updated.push({
                id: editingId,
                title: title,
                price: roundedPrice,
                image: image
            });
        } else {
            updated.push(item);
        }
    }

    localStorage.setItem(KEY_PRODUCTS, JSON.stringify(updated));
    localStorage.setItem(KEY_EDIT, JSON.stringify({ id: editingId, title: title, price: roundedPrice, image: image }));

    closeForm();
    sortProducts();
}

function saveProductForm() {
    if (editingId !== null && editingId !== undefined) {
        editProduct();
    } else {
        addProduct();
    }
}

function deleteProduct(id) {
    var products = getStoredProducts();
    var deletedProduct = null;

    for (var i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            deletedProduct = products[i];
        }
    }

    var updated = [];
    for (var j = 0; j < products.length; j++) {
        if (products[j].id !== id) {
            updated.push(products[j]);
        }
    }

    localStorage.setItem(KEY_PRODUCTS, JSON.stringify(updated));

    if (deletedProduct) {
        localStorage.setItem(KEY_DELETE, JSON.stringify(deletedProduct));
    }

    sortProducts();
}

function applyStoredSearch() {
    var searchValue = localStorage.getItem(KEY_SEARCH);
    if (!searchValue) {
        searchValue = "";
    }
    searchValue = searchValue.toLowerCase();

    var cards = document.querySelectorAll("#grid .tag-card");

    cards.forEach(function (card) {
        var text = card.innerText.toLowerCase();
        if (text.includes(searchValue)) {
            card.setAttribute("style", "display: block;");
        } else {
            card.setAttribute("style", "display: none;");
        }
    });
}

initProducts();

var searchInputEl = document.querySelector("#search");
var savedSearch = localStorage.getItem(KEY_SEARCH);
if (!savedSearch) {
    savedSearch = "";
}
searchInputEl.setAttribute("value", savedSearch);
searchInputEl.value = savedSearch;

var startSortRaw = localStorage.getItem(KEY_SORT);
var startSort;
if (startSortRaw) {
    startSort = JSON.parse(startSortRaw);
} else {
    startSort = {};
}

if (startSort.preference) {
    sortProducts(startSort.preference);
} else {
    sortProducts("");
}

document.querySelector("#sort").addEventListener("input", function (e) {
    sortProducts(e.target.value);
});

document.querySelector("#openAddBtn").addEventListener("click", function () {
    openForm("add");
});

document.querySelector("#closeFormBtn").addEventListener("click", closeForm);
document.querySelector("#cancelBtn").addEventListener("click", closeForm);
document.querySelector("#saveBtn").addEventListener("click", saveProductForm);

document.querySelector("#search").addEventListener("input", function (e) {
    localStorage.setItem(KEY_SEARCH, e.target.value);
    applyStoredSearch();
});

document.querySelector("#grid").addEventListener("click", function (e) {
    var card = e.target.closest(".tag-card");
    if (!card) return;

    // card ni id have getAttribute thi read kari chhe
    var id = card.getAttribute("id");

    if (e.target.classList.contains("edit-btn")) {
        var products = getStoredProducts();
        var product = null;

        for (var i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                product = products[i];
            }
        }

        if (product) {
            openForm("edit", product);
        }
    }

    if (e.target.classList.contains("delete-btn")) {
        deleteProduct(id);
    }
});
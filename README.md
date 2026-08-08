# 🏷️ Product Inventory Management System

A modern, responsive, and easy-to-use **Product Inventory Management System** built using **HTML, CSS, and JavaScript**.

This project provides a simple way to manage product information directly from the browser. Users can add, edit, delete, search, and sort products through a clean and modern inventory dashboard.

---

## 📌 Project Overview

The **Product Inventory Management System** is a frontend-based inventory application created to practice and demonstrate important JavaScript and web development concepts.

The application allows users to manage products without requiring a backend or database.

Product information is stored in the browser using **LocalStorage**, so the data remains available even after refreshing the page.

### Main Concepts Used

- DOM Manipulation
- Event Handling
- JavaScript Functions
- Arrays and Objects
- Form Validation
- Search and Filtering
- Sorting
- LocalStorage
- Dynamic HTML Rendering
- Responsive Web Design
- CSS Grid
- CSS Animations and Hover Effects

---

## ✨ Features

### ➕ Add Product

Users can add a new product by entering:

- Product Title
- Product Price
- Product Image URL

After clicking the **Add Product** button, the product is displayed automatically in the inventory grid.

---

### ✏️ Edit Product

Existing products can be edited easily.

Users can update:

- Product Title
- Product Price
- Product Image

After editing, the updated product information is saved to LocalStorage.

---

### 🗑️ Delete Product

Users can remove products from the inventory using the **Delete** button.

When a product is deleted, it is removed from:

- Product Grid
- LocalStorage

---

### 🔍 Search Products

The **Search Products** input allows users to quickly find a product by its name.

The product list updates according to the search text.

Example:

```text
Search Products → Smart Watch
```

Only matching products are displayed.

---

### ↕️ Sort Products by Price

Products can be sorted according to their price.

Available options:

```text
Price : Low to High
Price : High to Low
```

This makes it easier to compare products based on their prices.

---

### 💾 LocalStorage

This project uses browser **LocalStorage** to store product information.

Because of LocalStorage, products remain available even after:

- Page Refresh
- Browser Restart
- Closing and Reopening the Website

> LocalStorage stores data only in the current browser and device. It is not an online database.

---

### 🖼️ Product Images

Every product supports an image URL.

The product image area has a fixed size so that images with different dimensions can be displayed consistently.

The images use `object-fit: contain` so that the complete product image can remain visible without unnecessary cropping.

---

### 📱 Responsive Design

The application is responsive and works on different screen sizes.

Supported devices:

- 🖥️ Desktop
- 💻 Laptop
- 📱 Mobile
- 📲 Tablet

The product grid automatically adjusts according to the screen size.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Styling and responsive design |
| JavaScript | Application functionality |
| LocalStorage | Browser-based data storage |
| Font Awesome | Icons |

---

## 📂 Project Structure

```text
Product Inventory Management System/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 📄 File Description

### `index.html`

Contains the main structure of the application.

It includes:

- Search Box
- Sort Option
- Add Product Button
- Product Grid
- Empty State
- Product Form
- Edit Button
- Delete Button

---

### `style.css`

Contains all the styling and responsive design.

It includes:

- Product Cards
- Product Images
- Search Box
- Sort Box
- Buttons
- Price Tags
- Form Design
- Modal Overlay
- Hover Effects
- Responsive Media Queries

---

### `script.js`

Contains the main functionality of the application.

It handles:

- Add Product
- Edit Product
- Delete Product
- Search Product
- Sort Product
- LocalStorage
- Product Rendering
- Form Validation
- Dynamic DOM Updates

---

## 🚀 How to Run the Project

### Step 1

Download or clone the project.

### Step 2

Open the project folder in **Visual Studio Code**.

### Step 3

Make sure these files are available:

```text
index.html
style.css
script.js
README.md
```

### Step 4

Open `index.html` in your browser.

You can also use **Live Server** in VS Code.

### Step 5

Click:

```text
+ Add Product
```

Then enter the product information.

---

## 💡 How the Application Works

The basic application flow is:

```text
User
  ↓
Add Product
  ↓
Enter Product Details
  ↓
Validate Data
  ↓
Create Product Object
  ↓
Save Product to LocalStorage
  ↓
Render Product Card
  ↓
Display Product
```

When the page is refreshed:

```text
Browser
  ↓
Read LocalStorage
  ↓
Get Product Data
  ↓
Convert JSON Data
  ↓
Render Product Cards
  ↓
Display Products
```

---

## 🔍 Search Flow

The search functionality works like this:

```text
User enters product name
          ↓
JavaScript gets search value
          ↓
Products are filtered
          ↓
Matching products are selected
          ↓
Product cards are rendered
```

Example:

```text
Search: Bottle
```

Result:

```text
Bottle
```

---

## 💰 Sorting Flow

The sorting functionality works like this:

```text
User selects sorting option
          ↓
JavaScript reads product prices
          ↓
Product array is sorted
          ↓
Product cards are rendered again
```

Available options:

```text
Price : Low to High
Price : High to Low
```

---

## 💾 LocalStorage Flow

The product data is stored in LocalStorage using JSON.

The basic process is:

```text
Product Object
      ↓
JSON.stringify()
      ↓
LocalStorage
      ↓
JSON.parse()
      ↓
Product Array
      ↓
Render Products
```

This allows product information to remain saved after refreshing the browser.

---

## 📋 Product Card Design

Each product is displayed inside a product card.

The card contains:

```text
┌─────────────────────────┐
│                         │
│      Product Image      │
│                         │
├─────────────────────────┤
│ Product Name            │
│                         │
│ ₹ Product Price         │
│                         │
├─────────────────────────┤
│    Edit    │   Delete   │
└─────────────────────────┘
```

---

## 🎨 User Interface

The project uses a clean inventory-dashboard design.

### Color Palette

- 🌿 Light Sage Background
- 🟢 Dark Green Buttons
- 🟡 Golden Price Tags
- ⚪ White/Cream Product Cards
- 🌱 Light Green Search and Sort Inputs

The design also includes:

- Rounded Cards
- Soft Shadows
- Hover Animations
- Responsive Grid
- Clean Spacing
- Modern Buttons

---

## 🖼️ Image Design

Product images are displayed inside a fixed image container.

The CSS uses:

```css
object-fit: contain;
```

This helps keep the complete image visible.

The image container also includes:

```css
background: #eef2e9;
border-radius: 10px;
```

This creates a consistent look for products with different image sizes.

---

## ✅ Form Validation

The application validates product information before saving.

### Title Validation

Product title cannot be empty.

### Price Validation

The price must:

- Be a valid number
- Be greater than `0`

Invalid information is not added to the inventory.

---

## 📱 Responsive Layout

The product grid changes according to the screen size.

### 🖥️ Desktop

```text
[ Product ] [ Product ] [ Product ] [ Product ] [ Product ]
```

### 💻 Tablet

```text
[ Product ] [ Product ] [ Product ]
[ Product ] [ Product ] [ Product ]
```

### 📱 Mobile

```text
[ Product ]
[ Product ]
[ Product ]
```

---

## 📦 Example Products

Some example products used in the project:

| Product | Price |
|---|---:|
| Smart Watch | ₹4999 |
| Headphones | ₹3999 |
| Bag | ₹1050 |
| Bottle | ₹349 |
| Glass | ₹1999 |
| Goggles Stylish | ₹999 |
| Shirt | ₹999 |
| Shoes | ₹2499 |
| MacBook | ₹29999 |
| Mouse | ₹545 |

---

## 🌟 Advantages

- Simple and user-friendly interface
- No backend required
- No database required
- Uses LocalStorage
- Data remains after refresh
- Fast and lightweight
- Responsive design
- Easy to customize
- Clean UI
- Good JavaScript practice project
- Suitable for a frontend portfolio

---

## 📚 What I Learned

While creating this project, I practiced:

- HTML5
- CSS3
- CSS Grid
- Responsive Web Design
- JavaScript DOM Manipulation
- JavaScript Events
- Arrays
- Objects
- Functions
- Array Methods
- Form Validation
- Search Functionality
- Sorting Functionality
- LocalStorage
- JSON
- Dynamic HTML Rendering
- Responsive Media Queries

---

## 🔮 Future Improvements

The project can be improved by adding more advanced features.

### Possible Future Features

- 📦 Stock Quantity Management
- 🏷️ Product Categories
- 📊 Inventory Dashboard
- 📈 Sales Statistics
- 📉 Low Stock Alerts
- 🔐 User Login System
- 🗄️ Backend Database
- ☁️ Cloud Storage
- 📤 Export Products to CSV
- 📥 Import Products from CSV
- 🧾 Product Details Page
- 🌙 Dark Mode
- 🖼️ Direct Image Upload
- 🔔 Notifications
- 💳 Product Sales Management

---

## 🎯 Project Goals

The main goals of this project are:

1. Practice JavaScript fundamentals.
2. Learn DOM manipulation.
3. Understand LocalStorage.
4. Create reusable product cards.
5. Implement search and sorting.
6. Practice form validation.
7. Create responsive layouts.
8. Build a real-world frontend project.
9. Improve UI/UX design skills.
10. Create a project suitable for a portfolio.

---

## 🧪 Testing

The following features can be tested:

```text
✓ Add Product
✓ Edit Product
✓ Delete Product
✓ Search Product
✓ Sort Low to High
✓ Sort High to Low
✓ Refresh Page
✓ LocalStorage Data
✓ Form Validation
✓ Product Image
✓ Responsive Layout
```

---

## ⚠️ Important Note

This is a **frontend-only project**.

There is no:

- Backend server
- Online database
- User authentication
- Cloud storage

All product data is stored locally in the browser using **LocalStorage**.

---

## 👨‍💻 Author

### Smit Ramoliya

Frontend Developer

**Skills:**

```text
HTML
CSS
JavaScript
Responsive Web Design
LocalStorage
Git & GitHub
```

---

## ⭐ Support

If you like this project or find it useful for learning, consider giving the project a ⭐ on GitHub.

---

## 📄 License

This project is created for **learning, practice, and portfolio purposes**.

You are free to modify and improve the project for your own learning and development.

---

# 🚀 Thank You

Thank you for checking out the **Product Inventory Management System**.

Made with ❤️ using **HTML, CSS & JavaScript**.

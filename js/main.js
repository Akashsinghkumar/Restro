/* ================================================
   RESTRO — Master JavaScript Library
   Includes: Dark Mode, WhatsApp Direct Ordering, Table QR Mode,
   Party Catering Calculator, Coupon Engine & Reviews
   ================================================ */

// ── 1. COMPLETE DISHES DATABASE (70+ ITEMS) ──
const MENU_DATA = [
  // ── BURGERS & SANDWICHES ──
  { id: "veg-sandwich", name: "Classic Veg Sandwich", category: "burgers", categoryName: "Sandwich & Burgers", desc: "Fresh garden vegetables, spiced mint chutney, layered inside soft toasted bread slices.", price: 40, unit: "pc", img: "assets/images/seasonal_food.png", tag: "Quick Bite", prepTime: "8 mins" },
  { id: "paneer-sandwich", name: "Grilled Paneer Sandwich", category: "burgers", categoryName: "Sandwich & Burgers", desc: "Soft malai paneer cubes tossed in house spices, layered with sweet bell peppers and grilled golden.", price: 60, unit: "pc", img: "assets/images/paneer_butter_masala.png", tag: "Chef's Pick", prepTime: "10 mins" },
  { id: "cheese-sandwich", name: "Loaded Cheese Sandwich", category: "burgers", categoryName: "Sandwich & Burgers", desc: "A rich melt of cheddar and mozzarella cheeses with cracked black pepper and oregano.", price: 60, unit: "pc", img: "assets/images/pizza.png", tag: "Cheesy", prepTime: "8 mins" },
  { id: "veg-burger", name: "Classic Veg Crunch Burger", category: "burgers", categoryName: "Sandwich & Burgers", desc: "Golden crispy vegetable patty with fresh iceberg lettuce, sliced tomatoes, and house herb mayonnaise.", price: 45, unit: "pc", img: "assets/images/seasonal_food.png", tag: "Popular", prepTime: "10 mins" },
  { id: "butter-burger", name: "Golden Butter Burger", category: "burgers", categoryName: "Sandwich & Burgers", desc: "Toasted brioche bun brushed with Amul butter, loaded with a crispy herb patty and spiced slaw.", price: 50, unit: "pc", img: "assets/images/seasonal_food.png", tag: "Rich & Savory", prepTime: "10 mins" },
  { id: "cheese-burger", name: "Melted Cheese Burger", category: "burgers", categoryName: "Sandwich & Burgers", desc: "Savory veggie patty topped with a molten cheddar slice, sweet caramelized onions, and smoky sauce.", price: 70, unit: "pc", img: "assets/images/pizza.png", tag: "Bestseller", prepTime: "12 mins" },
  { id: "extra-cheese-burger", name: "Double Cheese Explosion Burger", category: "burgers", categoryName: "Sandwich & Burgers", desc: "Double cheese layer with a golden mozzarella melt dripping over a spiced vegetable patty.", price: 80, unit: "pc", img: "assets/images/pizza.png", tag: "Indulgent", prepTime: "12 mins" },
  { id: "cream-burger", name: "Rich Cream Burger", category: "burgers", categoryName: "Sandwich & Burgers", desc: "Velvety herb-infused cream spread layered with crispy patty, fresh greens, and subtle aromatics.", price: 55, unit: "pc", img: "assets/images/seasonal_food.png", tag: "Creamy", prepTime: "10 mins" },
  { id: "paneer-burger", name: "Tandoori Paneer Burger", category: "burgers", categoryName: "Sandwich & Burgers", desc: "Thick slab of spiced tandoori-marinated cottage cheese grilled to perfection with crisp onions.", price: 70, unit: "pc", img: "assets/images/paneer_butter_masala.png", tag: "Special", prepTime: "12 mins" },
  { id: "paneer-cheese-burger", name: "Royal Paneer Cheese Burger", category: "burgers", categoryName: "Sandwich & Burgers", desc: "The ultimate duo: thick grilled paneer steak crowned with melted gourmet cheese in a sesame bun.", price: 90, unit: "pc", img: "assets/images/paneer_butter_masala.png", tag: "Signature", prepTime: "14 mins" },

  // ── ARTISAN PIZZAS ──
  { id: "cheese-pizza", name: "Classic Margherita Cheese Pizza", category: "pizza", categoryName: "Hand-Crafted Pizzas", desc: "Stone-baked thin crust pizza topped with rich San Marzano tomato sauce, fresh basil, and pure mozzarella.", price: 99, unit: "pie", img: "assets/images/pizza.png", tag: "Classic", prepTime: "15 mins" },
  { id: "onion-pizza", name: "Charred Onion Pizza", category: "pizza", categoryName: "Hand-Crafted Pizzas", desc: "Caramelized red onion rings baked with aromatic oregano, crushed chilli flakes, and bubbly mozzarella.", price: 169, unit: "pie", img: "assets/images/pizza.png", tag: "Crispy", prepTime: "15 mins" },
  { id: "capsicum-pizza", name: "Fresh Bell Pepper Pizza", category: "pizza", categoryName: "Hand-Crafted Pizzas", desc: "Crunchy green bell peppers paired with seasoned marinara and golden baked cheese blend.", price: 119, unit: "pie", img: "assets/images/pizza.png", tag: "Fresh", prepTime: "15 mins" },
  { id: "mushroom-pizza", name: "Earthy Button Mushroom Pizza", category: "pizza", categoryName: "Hand-Crafted Pizzas", desc: "Tender button mushrooms sautéed in garlic herb butter spread generously over stone-fired crust.", price: 169, unit: "pie", img: "assets/images/pizza.png", tag: "Gourmet", prepTime: "15 mins" },
  { id: "paneer-pizza", name: "Spiced Paneer Tikka Pizza", category: "pizza", categoryName: "Hand-Crafted Pizzas", desc: "Marinated cottage cheese chunks, diced capsicum, onions, and spicy desi herb sprinkle with molten cheese.", price: 199, unit: "pie", img: "assets/images/pizza.png", tag: "Bestseller", prepTime: "15 mins" },
  { id: "tomato-pizza", name: "Sun-Ripened Tomato Pizza", category: "pizza", categoryName: "Hand-Crafted Pizzas", desc: "Juicy farm-fresh sliced tomatoes seasoned with sea salt, cracked pepper, and rich mozzarella.", price: 119, unit: "pie", img: "assets/images/pizza.png", tag: "Light & Tangy", prepTime: "14 mins" },
  { id: "baby-corn-pizza", name: "Crisp Baby Corn Pizza", category: "pizza", categoryName: "Hand-Crafted Pizzas", desc: "Tender golden baby corn slices paired with herb sauce, diced peppers, and mozzarella cheese.", price: 179, unit: "pie", img: "assets/images/pizza.png", tag: "Crunchy", prepTime: "15 mins" },
  { id: "sweet-corn-pizza", name: "Golden Sweet Corn Pizza", category: "pizza", categoryName: "Hand-Crafted Pizzas", desc: "Sweet American corn kernels baked over tangy tomato puree and gooey melted cheese.", price: 169, unit: "pie", img: "assets/images/pizza.png", tag: "Kids Favorite", prepTime: "14 mins" },
  { id: "mix-veg-pizza", name: "GS Supreme Garden Veg Pizza", category: "pizza", categoryName: "Hand-Crafted Pizzas", desc: "Loaded garden harvest with mushrooms, corn, capsicum, onions, tomatoes, and double mozzarella.", price: 199, unit: "pie", img: "assets/images/pizza.png", tag: "Supreme", prepTime: "16 mins" },
  { id: "veg-pizza", name: "Everyday Veggie Pizza", category: "pizza", categoryName: "Hand-Crafted Pizzas", desc: "Wholesome seasonal diced vegetables with classic Italian seasoning and melted cheese on crisp base.", price: 149, unit: "pie", img: "assets/images/pizza.png", tag: "Popular", prepTime: "15 mins" },

  // ── CRISPY DOSA SPECIALTIES ──
  { id: "plain-dosa", name: "Golden Crisp Plain Dosa", category: "dosa", categoryName: "South Indian Dosa", desc: "Paper-thin fermented golden crepe roasted on iron griddle. Served with piping hot dal sambar & coconut chutney.", price: 49, unit: "plate", img: "assets/images/masala_dosa.png", tag: "Traditional", prepTime: "8 mins" },
  { id: "masala-dosa", name: "Signature Masala Dosa", category: "dosa", categoryName: "South Indian Dosa", desc: "Crisp golden crepe stuffed with flavorful spiced potato-onion mash seasoned with mustard seeds & curry leaves.", price: 69, unit: "plate", img: "assets/images/masala_dosa.png", tag: "All-Time Favorite", prepTime: "10 mins" },
  { id: "butter-masala-dosa", name: "Butter Masala Dosa", category: "dosa", categoryName: "South Indian Dosa", desc: "Generously roasted in pure butter for a rich golden glaze, filled with savory spiced potato masala.", price: 89, unit: "plate", img: "assets/images/masala_dosa.png", tag: "Rich & Crisp", prepTime: "10 mins" },
  { id: "paneer-masala-dosa", name: "Royal Paneer Masala Dosa", category: "dosa", categoryName: "South Indian Dosa", desc: "Crispy dosa generously packed with spiced grated paneer, roasted onions, and fresh coriander.", price: 149, unit: "plate", img: "assets/images/masala_dosa.png", tag: "Chef's Special", prepTime: "12 mins" },
  { id: "cheese-masala-dosa", name: "Cheese Burst Masala Dosa", category: "dosa", categoryName: "South Indian Dosa", desc: "Golden crepe layered with melted mozzarella that fuses into the spiced potato mash for an indulgent bite.", price: 119, unit: "plate", img: "assets/images/masala_dosa.png", tag: "Cheesy", prepTime: "12 mins" },
  { id: "paneer-cheese-masala-dosa", name: "Paneer & Cheese Masala Dosa", category: "dosa", categoryName: "South Indian Dosa", desc: "A royal fusion of fresh spiced cottage cheese crumble and gooey melted cheese rolled in a crisp crepe.", price: 169, unit: "plate", img: "assets/images/masala_dosa.png", tag: "Must Try", prepTime: "14 mins" },
  { id: "paneer-butter-masala-dosa", name: "Paneer Butter Masala Dosa", category: "dosa", categoryName: "South Indian Dosa", desc: "Double indulgence: golden butter-roasted dosa packed with rich paneer butter masala filling.", price: 169, unit: "plate", img: "assets/images/masala_dosa.png", tag: "Grand Feast", prepTime: "14 mins" },

  // ── BREAKFAST & MORNING BITES ──
  { id: "steamed-idli", name: "Steamed Idli (2 pcs)", category: "breakfast", categoryName: "Morning Breakfast", desc: "Pillowy-soft steamed rice & lentil cakes served with aromatic vegetable sambar and fresh coconut chutney.", price: 20, unit: "plate", img: "assets/images/masala_dosa.png", tag: "Healthy", prepTime: "5 mins" },
  { id: "fry-idli", name: "Tadka Masala Fry Idli (2 pcs)", category: "breakfast", categoryName: "Morning Breakfast", desc: "Idli cubes pan-crisped with mustard seeds, curry leaves, green chillies, and podi spice.", price: 30, unit: "plate", img: "assets/images/masala_dosa.png", tag: "Zesty", prepTime: "8 mins" },
  { id: "chola-bhatura", name: "Punjabi Chola Bhatura (2 pcs)", category: "breakfast", categoryName: "Morning Breakfast", desc: "Fluffy puffed golden bhaturas accompanied by rich slow-cooked spiced chickpea curry and pickled onions.", price: 69, unit: "plate", img: "assets/images/seasonal_food.png", tag: "Morning Special", prepTime: "10 mins" },
  { id: "kachori", name: "Crispy Dal Kachori (1 pc)", category: "breakfast", categoryName: "Morning Breakfast", desc: "Deep-fried flaky pastry filled with spiced yellow moong dal paste, served with tangy tamarind chutney.", price: 10, unit: "pc", img: "assets/images/menu_pastry.png", tag: "Snack", prepTime: "3 mins" },
  { id: "puri-sabji", name: "Bedmi Puri Sabji (4 pcs)", category: "breakfast", categoryName: "Morning Breakfast", desc: "Four hot golden puffed wheat puris paired with homestyle spiced potato curry and mango pickle.", price: 40, unit: "plate", img: "assets/images/seasonal_food.png", tag: "Homestyle", prepTime: "8 mins" },

  // ── SNACKS, MOMOS & ROLLS ──
  { id: "finger-fries", name: "Crispy Golden Finger Fries", category: "starters", categoryName: "Snacks & Starters", desc: "Skin-on potato fingers flash-fried for crunch outside and fluffiness inside, seasoned with sea salt.", hasPortions: true, priceHalf: 29, priceFull: 50, price: 29, img: "assets/images/seasonal_food.png", tag: "Crunchy", prepTime: "8 mins" },
  { id: "masala-fries", name: "Spiced Masala Finger Fries", category: "starters", categoryName: "Snacks & Starters", desc: "Golden crispy fries tossed in tangy chaat masala and smoky peri-peri herbs with creamy dip.", hasPortions: true, priceHalf: 39, priceFull: 69, price: 39, img: "assets/images/seasonal_food.png", tag: "Spicy", prepTime: "8 mins" },
  { id: "paneer-pakora", name: "Amritsari Paneer Pakora", category: "starters", categoryName: "Snacks & Starters", desc: "Thick cottage cheese slabs coated in seasoned gram flour batter, fried crispy golden and dusted with chaat masala.", hasPortions: true, priceHalf: 99, priceFull: 199, price: 99, img: "assets/images/paneer_butter_masala.png", tag: "Must Try", prepTime: "12 mins" },
  { id: "samosa", name: "Desi Crispy Samosa", category: "starters", categoryName: "Snacks & Starters", desc: "Classic golden pyramid pastry filled with spiced potato and green pea hash with cumin aromatics.", price: 10, unit: "pc", img: "assets/images/menu_pastry.png", tag: "Classic", prepTime: "3 mins" },
  { id: "veg-momo", name: "Steamed Vegetable Momos", category: "starters", categoryName: "Snacks & Starters", desc: "Delicate handmade parcels filled with minced cabbage, carrots, ginger, and scallions. Served with spicy dip.", hasPortions: true, priceHalf: 45, priceFull: 80, price: 45, img: "assets/images/seasonal_food.png", tag: "Street Style", prepTime: "10 mins" },
  { id: "fry-momo", name: "Crisp Fried Momos", category: "starters", categoryName: "Snacks & Starters", desc: "Golden fried crunchy momos with a juicy savory vegetable core, paired with hot garlic chili salsa.", hasPortions: true, priceHalf: 55, priceFull: 99, price: 55, img: "assets/images/seasonal_food.png", tag: "Crispy", prepTime: "10 mins" },
  { id: "kurkure-momo", name: "Kurkure Crunch Momos", category: "starters", categoryName: "Snacks & Starters", desc: "Flaky crumb-coated super crunchy dumplings tossed in zesty spices and served with garlic mayo dip.", hasPortions: true, priceHalf: 65, priceFull: 120, price: 65, img: "assets/images/seasonal_food.png", tag: "Super Crunch", prepTime: "12 mins" },
  { id: "veg-roll", name: "Kolkata Style Veg Kathi Roll", category: "starters", categoryName: "Snacks & Starters", desc: "Layered flaky paratha rolled with sautéed spiced cabbage, capsicum, onions, and tangy mint sauces.", price: 45, unit: "pc", img: "assets/images/seasonal_food.png", tag: "On-the-go", prepTime: "10 mins" },
  { id: "paneer-roll", name: "Tawa Paneer Tikka Roll", category: "starters", categoryName: "Snacks & Starters", desc: "Soft paratha wrap rolled around chargrilled paneer cubes, crunchy pickled onions, and spicy chutney.", price: 70, unit: "pc", img: "assets/images/paneer_butter_masala.png", tag: "Popular", prepTime: "10 mins" },
  { id: "spring-roll", name: "Crispy Asian Spring Rolls", category: "starters", categoryName: "Snacks & Starters", desc: "Thin pastry sheets filled with glass noodles and shredded Asian vegetables, fried golden and crisp.", price: 49, unit: "plate", img: "assets/images/seasonal_food.png", tag: "Crunchy", prepTime: "10 mins" },
  { id: "paneer-spring-roll", name: "Paneer Stuffed Spring Rolls", category: "starters", categoryName: "Snacks & Starters", desc: "Crispy rolls bursting with spiced crumbled paneer and wok-seared vegetables served with sweet chili sauce.", price: 79, unit: "plate", img: "assets/images/paneer_butter_masala.png", tag: "Special", prepTime: "12 mins" },

  // ── INDO-CHINESE CHILLI ──
  { id: "veg-chilli", name: "Crisp Veg Manchurian Chilli", category: "starters", categoryName: "Indo-Chinese Delights", desc: "Crispy vegetable balls wok-glazed in dark soy, minced garlic, ginger, and fresh green chillies.", hasPortions: true, priceHalf: 50, priceFull: 80, price: 50, img: "assets/images/seasonal_food.png", tag: "Tangy & Spicy", prepTime: "12 mins" },
  { id: "paneer-chilli", name: "Wok-Tossed Paneer Chilli", category: "starters", categoryName: "Indo-Chinese Delights", desc: "Crispy fried cottage cheese cubes tossed with diced bell peppers, onions, and spicy Schezwan-soy reduction.", hasPortions: true, priceHalf: 80, priceFull: 150, price: 80, img: "assets/images/paneer_butter_masala.png", tag: "Bestseller", prepTime: "14 mins" },
  { id: "mushroom-chilli", name: "Spiced Mushroom Chilli", category: "starters", categoryName: "Indo-Chinese Delights", desc: "Tender button mushrooms batter-fried and tossed in a fiery green chilli and garlic soy glaze.", hasPortions: true, priceHalf: 80, priceFull: 150, price: 80, img: "assets/images/seasonal_food.png", tag: "Spicy", prepTime: "14 mins" },
  { id: "baby-corn-chilli", name: "Crisp Baby Corn Chilli", category: "starters", categoryName: "Indo-Chinese Delights", desc: "Crunchy baby corn tempura stir-fried with scallions, capsicum, and roasted chili garlic sauce.", hasPortions: true, priceHalf: 80, priceFull: 150, price: 80, img: "assets/images/seasonal_food.png", tag: "Crunchy", prepTime: "12 mins" },
  { id: "mix-chilli", name: "Grand Mix Veg Chilli Platter", category: "starters", categoryName: "Indo-Chinese Delights", desc: "A rich combination of crispy paneer, mushrooms, and baby corn wok-seared in aromatic Asian sauce.", hasPortions: true, priceHalf: 85, priceFull: 160, price: 85, img: "assets/images/seasonal_food.png", tag: "Chef's Platter", prepTime: "15 mins" },

  // ── NOODLES, CHOWMEIN, MAGGI & PASTA ──
  { id: "veg-chowmein", name: "Street Style Veg Chowmein", category: "noodles", categoryName: "Noodles & Pasta", desc: "Wok-tossed noodles with crunchy julienned cabbage, capsicum, carrots, and savory dark soy seasoning.", hasPortions: true, priceHalf: 45, priceFull: 80, price: 45, img: "assets/images/seasonal_food.png", tag: "Classic", prepTime: "10 mins" },
  { id: "paneer-chowmein", name: "Royal Paneer Chowmein", category: "noodles", categoryName: "Noodles & Pasta", desc: "Soft cottage cheese chunks and colorful veggies wok-fried with long noodles and aromatic herbs.", hasPortions: true, priceHalf: 75, priceFull: 120, price: 75, img: "assets/images/paneer_butter_masala.png", tag: "Rich", prepTime: "12 mins" },
  { id: "chilli-chowmein", name: "Spicy Chilli Garlic Chowmein", category: "noodles", categoryName: "Noodles & Pasta", desc: "Noodles tossed with burnt garlic flakes, red chilli paste, and crisp scallions for intense flavor.", hasPortions: true, priceHalf: 75, priceFull: 120, price: 75, img: "assets/images/seasonal_food.png", tag: "Hot & Fiery", prepTime: "12 mins" },
  { id: "mushroom-chowmein", name: "Garlic Mushroom Chowmein", category: "noodles", categoryName: "Noodles & Pasta", desc: "Sautéed button mushrooms and sweet onions tossed through silky stir-fried noodles.", hasPortions: true, priceHalf: 75, priceFull: 140, price: 75, img: "assets/images/seasonal_food.png", tag: "Flavorful", prepTime: "12 mins" },
  { id: "corn-chowmein", name: "Sweet Corn Chowmein", category: "noodles", categoryName: "Noodles & Pasta", desc: "Sweet American corn kernels paired with vegetables and delicate Asian spice tossed noodles.", hasPortions: true, priceHalf: 75, priceFull: 140, price: 75, img: "assets/images/seasonal_food.png", tag: "Mild", prepTime: "10 mins" },
  { id: "schezwan-chowmein", name: "Fiery Schezwan Chowmein", category: "noodles", categoryName: "Noodles & Pasta", desc: "Spicy homemade Schezwan pepper sauce coating every strand of wok-tossed noodles.", hasPortions: true, priceHalf: 50, priceFull: 90, price: 50, img: "assets/images/seasonal_food.png", tag: "Spicy", prepTime: "12 mins" },
  { id: "maggi", name: "Comforting Classic Maggi", category: "noodles", categoryName: "Maggi & Pasta", desc: "Steaming hot childhood nostalgia prepared with authentic Maggi spice tastemaker broth.", hasPortions: true, priceHalf: 30, priceFull: 60, price: 30, img: "assets/images/seasonal_food.png", tag: "Comfort Food", prepTime: "6 mins" },
  { id: "masala-maggi", name: "Tadka Masala Maggi", category: "noodles", categoryName: "Maggi & Pasta", desc: "Maggi simmered with sautéed onions, juicy tomatoes, green chillies, and roasted coriander.", hasPortions: true, priceHalf: 35, priceFull: 70, price: 35, img: "assets/images/seasonal_food.png", tag: "Popular", prepTime: "8 mins" },
  { id: "veg-maggi", name: "Garden Harvest Veg Maggi", category: "noodles", categoryName: "Maggi & Pasta", desc: "Loaded with tender green peas, diced carrots, sweet corn, and aromatic herbs.", hasPortions: true, priceHalf: 40, priceFull: 90, price: 40, img: "assets/images/seasonal_food.png", tag: "Hearty", prepTime: "8 mins" },
  { id: "butter-maggi", name: "Rich Amul Butter Maggi", category: "noodles", categoryName: "Maggi & Pasta", desc: "Finished with a melting dollop of pure dairy butter for a velvety, comforting broth.", hasPortions: true, priceHalf: 40, priceFull: 80, price: 40, img: "assets/images/seasonal_food.png", tag: "Rich", prepTime: "8 mins" },
  { id: "classic-pasta", name: "Herb Marinara Pasta", category: "noodles", categoryName: "Maggi & Pasta", desc: "Al dente penne pasta tossed in herb-seasoned Italian tomato garlic sauce with oregano.", hasPortions: true, priceHalf: 40, priceFull: 80, price: 40, img: "assets/images/seasonal_food.png", tag: "Italian", prepTime: "12 mins" },
  { id: "veg-pasta", name: "Garden Fresh Veggie Pasta", category: "noodles", categoryName: "Maggi & Pasta", desc: "Penne pasta with sautéed seasonal capsicum, sweet corn, and onion in rich marinara.", hasPortions: true, priceHalf: 45, priceFull: 90, price: 45, img: "assets/images/seasonal_food.png", tag: "Classic", prepTime: "12 mins" },
  { id: "masala-pasta", name: "Desi Fusion Masala Pasta", category: "noodles", categoryName: "Maggi & Pasta", desc: "Italian penne pasta cooked in a spiced Indian tomato onion gravy with fresh coriander.", hasPortions: true, priceHalf: 45, priceFull: 90, price: 45, img: "assets/images/seasonal_food.png", tag: "Desi Fusion", prepTime: "12 mins" },
  { id: "schezwan-pasta", name: "Zesty Schezwan Pasta", category: "noodles", categoryName: "Maggi & Pasta", desc: "Penne pasta wok-tossed in zesty fiery red Schezwan sauce with crunch vegetables.", hasPortions: true, priceHalf: 40, priceFull: 80, price: 40, img: "assets/images/seasonal_food.png", tag: "Spicy", prepTime: "12 mins" },
  { id: "paneer-pasta", name: "Creamy Paneer Tikka Pasta", category: "noodles", categoryName: "Maggi & Pasta", desc: "Rich pasta loaded with succulent paneer cubes and creamy spiced herb reduction.", hasPortions: true, priceHalf: 75, priceFull: 140, price: 75, img: "assets/images/paneer_butter_masala.png", tag: "Chef's Special", prepTime: "14 mins" },
  { id: "mushroom-pasta", name: "Creamy Garlic Mushroom Pasta", category: "noodles", categoryName: "Maggi & Pasta", desc: "Garlic sautéed button mushrooms tossed with penne in a velvety herb cream sauce.", hasPortions: true, priceHalf: 75, priceFull: 140, price: 75, img: "assets/images/seasonal_food.png", tag: "Gourmet", prepTime: "14 mins" },

  // ── ROYAL PANEER CURRIES ──
  { id: "paneer-masala", name: "Paneer Masala", category: "curries", categoryName: "Main Course Curries", desc: "Tender cottage cheese simmered in a spiced onion-tomato gravy with freshly roasted whole spices.", hasPortions: true, priceHalf: 99, priceFull: 189, price: 99, img: "assets/images/paneer_butter_masala.png", tag: "Authentic", prepTime: "15 mins" },
  { id: "paneer-butter-masala", name: "Paneer Butter Masala", category: "curries", categoryName: "Main Course Curries", desc: "Restro's royal recipe: velvety smooth cashew-tomato makhani gravy enriched with fresh cream and butter.", hasPortions: true, priceHalf: 109, priceFull: 199, price: 109, img: "assets/images/paneer_butter_masala.png", tag: "Signature Dish", prepTime: "15 mins" },
  { id: "paneer-do-pyaza", name: "Paneer Do Pyaza", category: "curries", categoryName: "Main Course Curries", desc: "Double-layered onion delicacy — caramelized onion base topped with crunchy sautéed shallots and paneer.", hasPortions: true, priceHalf: 119, priceFull: 199, price: 119, img: "assets/images/paneer_butter_masala.png", tag: "Popular", prepTime: "16 mins" },
  { id: "kadai-paneer", name: "Kadai Paneer", category: "curries", categoryName: "Main Course Curries", desc: "Spicy semi-dry gravy tossed with freshly pounded coriander seeds, dry red chillies, and crisp bell peppers.", hasPortions: true, priceHalf: 119, priceFull: 219, price: 119, img: "assets/images/paneer_butter_masala.png", tag: "Kadai Special", prepTime: "16 mins" },
  { id: "shahi-paneer", name: "Royal Shahi Paneer", category: "curries", categoryName: "Main Course Curries", desc: "Fit for royalty — delicate paneer in an opulent cashew, melon seed, and saffron-scented white gravy.", hasPortions: true, priceHalf: 149, priceFull: 249, price: 149, img: "assets/images/paneer_butter_masala.png", tag: "Royal Feast", prepTime: "18 mins" },
  { id: "paneer-mushroom-masala", name: "Paneer Mushroom Masala", category: "curries", categoryName: "Main Course Curries", desc: "Harmonious duo of fresh button mushrooms and soft paneer simmered in robust ginger-garlic masala.", hasPortions: true, priceHalf: 119, priceFull: 199, price: 119, img: "assets/images/paneer_butter_masala.png", tag: "Special Combo", prepTime: "16 mins" },
  { id: "paneer-cheese-masala", name: "Paneer Cheese Masala", category: "curries", categoryName: "Main Course Curries", desc: "A decadently rich curry integrating grated cheddar and mozzarella right into the spiced paneer gravy.", hasPortions: true, priceHalf: 119, priceFull: 199, price: 119, img: "assets/images/paneer_butter_masala.png", tag: "Cheesy & Rich", prepTime: "16 mins" },
  { id: "mix-veg", name: "Dehati Mix Vegetable Curry", category: "curries", categoryName: "Main Course Curries", desc: "Cauliflower, carrots, green beans, peas, and potatoes simmered in a homestyle spiced tomato broth.", hasPortions: true, priceHalf: 80, priceFull: 160, price: 80, img: "assets/images/seasonal_food.png", tag: "Healthy", prepTime: "14 mins" },

  // ── MUSHROOM & DALS ──
  { id: "mushroom-masala", name: "Mushroom Masala", category: "curries", categoryName: "Mushroom & Dal", desc: "Juicy whole button mushrooms slow-braised in a traditional roasted cumin and coriander onion gravy.", hasPortions: true, priceHalf: 99, priceFull: 189, price: 99, img: "assets/images/seasonal_food.png", tag: "Earthy", prepTime: "15 mins" },
  { id: "mushroom-butter-masala", name: "Mushroom Butter Masala", category: "curries", categoryName: "Mushroom & Dal", desc: "Plump mushrooms stewed in silky buttery tomato makhani gravy finished with crushed kasuri methi.", hasPortions: true, priceHalf: 109, priceFull: 199, price: 109, img: "assets/images/seasonal_food.png", tag: "Silky Smooth", prepTime: "15 mins" },
  { id: "mushroom-do-pyaza", name: "Mushroom Do Pyaza", category: "curries", categoryName: "Mushroom & Dal", desc: "Button mushrooms pan-cooked with double onions for sweet caramelization and crunchy bite.", hasPortions: true, priceHalf: 119, priceFull: 219, price: 119, img: "assets/images/seasonal_food.png", tag: "Savory", prepTime: "16 mins" },
  { id: "kadai-mushroom", name: "Kadai Mushroom", category: "curries", categoryName: "Mushroom & Dal", desc: "Wok-seared mushrooms tossed with cracked spices, fresh bell peppers, and roasted tomatoes.", hasPortions: true, priceHalf: 119, priceFull: 219, price: 119, img: "assets/images/seasonal_food.png", tag: "Spicy", prepTime: "16 mins" },
  { id: "mushroom-cheese-masala", name: "Mushroom Cheese Masala", category: "curries", categoryName: "Mushroom & Dal", desc: "Cheesy delight combining garlic-sautéed mushrooms with thick spiced melted cheese gravy.", hasPortions: true, priceHalf: 119, priceFull: 199, price: 119, img: "assets/images/seasonal_food.png", tag: "Cheesy", prepTime: "16 mins" },
  { id: "mushroom-special", name: "GS Chef's Mushroom Special", category: "curries", categoryName: "Mushroom & Dal", desc: "Chef’s signature slow-cooked preparation with roasted nuts, saffron glaze, and aromatic spices.", hasPortions: true, priceHalf: 149, priceFull: 249, price: 149, img: "assets/images/seasonal_food.png", tag: "Chef's Signature", prepTime: "18 mins" },
  { id: "dal-tadka", name: "Desi Ghee Dal Tadka", category: "curries", categoryName: "Dal Specialties", desc: "Yellow arhar lentils tempered with hot cow ghee, cumin seeds, garlic, dried red chillies, and hing.", hasPortions: true, priceHalf: 69, priceFull: 99, price: 69, img: "assets/images/seasonal_food.png", tag: "Comfort", prepTime: "10 mins" },
  { id: "butter-dal-tadka", name: "Butter Dal Tadka", category: "curries", categoryName: "Dal Specialties", desc: "Slow-simmered yellow lentils finished with a double tadka of sizzling Amul butter and crushed garlic.", hasPortions: true, priceHalf: 79, priceFull: 109, price: 79, img: "assets/images/seasonal_food.png", tag: "Rich", prepTime: "10 mins" },
  { id: "bati-tadka", name: "Marwari Bati Dal Tadka", category: "curries", categoryName: "Dal Specialties", desc: "Traditional rich spiced pancharatna lentil preparation crafted specifically to pair with rotis & parathas.", hasPortions: true, priceHalf: 79, priceFull: 109, price: 79, img: "assets/images/seasonal_food.png", tag: "Traditional", prepTime: "12 mins" },
  { id: "dal-fry", name: "Dhaba Style Dal Fry", category: "curries", categoryName: "Dal Specialties", desc: "Lentils pan-fried with finely chopped onions, juicy tomatoes, fresh ginger, and green chillies.", hasPortions: true, priceHalf: 79, priceFull: 149, price: 79, img: "assets/images/seasonal_food.png", tag: "Dhaba Style", prepTime: "12 mins" },

  // ── RICE, BIRYANI & THALIS ──
  { id: "steam-rice", name: "Steamed Fragrant Basmati Rice", category: "rice", categoryName: "Rice & Thali", desc: "Fluffy, long-grain aged basmati rice cooked to delicate perfection.", hasPortions: true, priceHalf: 30, priceFull: 50, price: 30, img: "assets/images/seasonal_food.png", tag: "Staple", prepTime: "8 mins" },
  { id: "jeera-rice", name: "Shahi Jeera Rice", category: "rice", categoryName: "Rice & Thali", desc: "Long-grain basmati tempered with roasted whole royal cumin seeds and fragrant desi ghee.", hasPortions: true, priceHalf: 60, priceFull: 99, price: 60, img: "assets/images/seasonal_food.png", tag: "Aromatic", prepTime: "10 mins" },
  { id: "veg-fried-rice", name: "Wok Veg Fried Rice", category: "rice", categoryName: "Rice & Thali", desc: "Basmati rice wok-tossed with finely chopped carrots, French beans, cabbage, and scallions.", hasPortions: true, priceHalf: 50, priceFull: 80, price: 50, img: "assets/images/seasonal_food.png", tag: "Indo-Chinese", prepTime: "10 mins" },
  { id: "mix-veg-rice", name: "Harvest Mix Veg Rice", category: "rice", categoryName: "Rice & Thali", desc: "Hearty rice pilaf loaded with spiced garden vegetables and whole garam masala.", hasPortions: true, priceHalf: 85, priceFull: 159, price: 85, img: "assets/images/seasonal_food.png", tag: "Wholesome", prepTime: "12 mins" },
  { id: "paneer-rice", name: "Golden Paneer Fried Rice", category: "rice", categoryName: "Rice & Thali", desc: "Fragrant basmati rice stir-fried with crisp golden paneer cubes and Asian herbs.", hasPortions: true, priceHalf: 50, priceFull: 90, price: 50, img: "assets/images/paneer_butter_masala.png", tag: "Popular", prepTime: "12 mins" },
  { id: "schezwan-rice", name: "Spicy Schezwan Fried Rice", category: "rice", categoryName: "Rice & Thali", desc: "Fiery wok-tossed basmati rice glazed in homemade red chili garlic Schezwan paste.", hasPortions: true, priceHalf: 75, priceFull: 149, price: 75, img: "assets/images/seasonal_food.png", tag: "Spicy", prepTime: "12 mins" },
  { id: "veg-biryani", name: "Hyderabadi Veg Dum Biryani", category: "rice", categoryName: "Rice & Thali", desc: "Layered basmati rice and saffron-infused vegetables slow-cooked in sealed handi. Served with spiced raita.", hasPortions: true, priceHalf: 90, priceFull: 179, price: 90, img: "assets/images/seasonal_food.png", tag: "Royal Dum", prepTime: "18 mins" },
  { id: "pulao", name: "Kashmiri Navratan Pulao", category: "rice", categoryName: "Rice & Thali", desc: "Aromatic basmati rice cooked with whole spices, green peas, fried cashews, and raisins.", hasPortions: true, priceHalf: 109, priceFull: 199, price: 109, img: "assets/images/seasonal_food.png", tag: "Sweet & Savory", prepTime: "14 mins" },
  { id: "regular-thali", name: "GS Executive Regular Thali", category: "rice", categoryName: "Rice & Thali", desc: "Complete wholesome meal: 4 Hot Tawa Rotis, Steamed Basmati Rice, Dal Tadka, Seasonal Sabji, Salad & Pickle.", price: 80, unit: "thali", img: "assets/images/seasonal_food.png", tag: "Best Value", prepTime: "10 mins" },
  { id: "special-thali", name: "GS Maharaja Special Thali", category: "rice", categoryName: "Rice & Thali", desc: "Royal Feast: 4 Butter Rotis, Shahi Jeera Rice, Paneer Butter Masala, Dhaba Dal Fry, Gulab Jamun Sweet, Raita, Salad & Papad.", price: 120, unit: "thali", img: "assets/images/hero_food.png", tag: "Grand Feast", prepTime: "15 mins" },

  // ── BREADS & ROTIS ──
  { id: "tawa-roti", name: "Fresh Tawa Roti", category: "breads", categoryName: "Breads & Roti", desc: "100% whole wheat homestyle soft flatbread roasted on iron tawa.", price: 9, unit: "pc", img: "assets/images/seasonal_food.png", tag: "Homestyle", prepTime: "4 mins" },
  { id: "tawa-butter-roti", name: "Tawa Butter Roti", category: "breads", categoryName: "Breads & Roti", desc: "Hot whole wheat tawa roti generously brushed with pure dairy butter.", price: 15, unit: "pc", img: "assets/images/seasonal_food.png", tag: "Popular", prepTime: "4 mins" },
  { id: "tawa-naan", name: "Tawa Naan Roti", category: "breads", categoryName: "Breads & Roti", desc: "Soft and fluffy leavened bread roasted golden on iron tawa.", price: 25, unit: "pc", img: "assets/images/seasonal_food.png", tag: "Soft", prepTime: "6 mins" },
  { id: "tawa-butter-naan", name: "Tawa Butter Naan", category: "breads", categoryName: "Breads & Roti", desc: "Warm tawa naan glazed with melted butter and toasted nigella seeds.", price: 35, unit: "pc", img: "assets/images/seasonal_food.png", tag: "Rich", prepTime: "6 mins" },
  { id: "lachha-paratha", name: "Flaky Lachha Paratha", category: "breads", categoryName: "Breads & Roti", desc: "Multi-layered flaky whole wheat paratha crisped on griddle with ghee.", price: 30, unit: "pc", img: "assets/images/seasonal_food.png", tag: "Flaky Layers", prepTime: "8 mins" },
  { id: "butter-lachha-paratha", name: "Butter Lachha Paratha", category: "breads", categoryName: "Breads & Roti", desc: "Golden layered flaky paratha brushed with pure melted butter.", price: 35, unit: "pc", img: "assets/images/seasonal_food.png", tag: "Must Try", prepTime: "8 mins" },

  // ── SALADS, SWEETS & BEVERAGES ──
  { id: "onion-salad", name: "Sliced Onion Salad", category: "sweets", categoryName: "Salad, Sweets & Drinks", desc: "Fresh sliced red onions seasoned with rock salt, chaat masala, and fresh lemon wedges.", price: 30, unit: "plate", img: "assets/images/seasonal_food.png", tag: "Fresh", prepTime: "3 mins" },
  { id: "cucumber-salad", name: "Crisp Cucumber Salad", category: "sweets", categoryName: "Salad, Sweets & Drinks", desc: "Chilled garden cucumber slices dusted with roasted cumin powder and sea salt.", price: 30, unit: "plate", img: "assets/images/seasonal_food.png", tag: "Cooling", prepTime: "3 mins" },
  { id: "green-salad", name: "GS Green Garden Salad", category: "sweets", categoryName: "Salad, Sweets & Drinks", desc: "Crisp cucumber, red onions, ripe tomatoes, carrots, and green chillies with lemon dressing.", price: 50, unit: "plate", img: "assets/images/seasonal_food.png", tag: "Healthy", prepTime: "4 mins" },
  { id: "gulab-jamun", name: "Hot Shahi Gulab Jamun (2 pcs)", category: "sweets", categoryName: "Salad, Sweets & Drinks", desc: "Soft golden khoya spheres soaked in warm rose-scented cardamom sugar syrup.", price: 20, unit: "portion", img: "assets/images/menu_pastry.png", tag: "Sweet Treat", prepTime: "3 mins" },
  { id: "rasgulla", name: "Kolkata Spongy Rasgulla (2 pcs)", category: "sweets", categoryName: "Salad, Sweets & Drinks", desc: "Delicate fresh chenna dumplings steeped in light fragrant sugar syrup.", price: 20, unit: "portion", img: "assets/images/menu_pastry.png", tag: "Traditional", prepTime: "3 mins" },
  { id: "rasmalai", name: "Kesar Pista Rasmalai (1 pc)", category: "sweets", categoryName: "Salad, Sweets & Drinks", desc: "Melt-in-mouth cottage cheese disc immersed in thickened saffron-pistachio rabdi.", price: 40, unit: "pc", img: "assets/images/menu_pastry.png", tag: "Royal Sweet", prepTime: "3 mins" },
  { id: "kesari-bhog", name: "Kesari Bhog / Kheer", category: "sweets", categoryName: "Salad, Sweets & Drinks", desc: "Traditional saffron-infused slow-cooked milk pudding garnished with slivered almonds.", price: 30, unit: "portion", img: "assets/images/menu_pastry.png", tag: "Saffron Infused", prepTime: "3 mins" },
  { id: "kaju-katli", name: "Pure Silver Kaju Katli (2 pcs)", category: "sweets", categoryName: "Salad, Sweets & Drinks", desc: "Diamond-shaped cashew fudge made with 100% premium cashews and silver vark.", price: 30, unit: "portion", img: "assets/images/menu_pastry.png", tag: "Festive", prepTime: "2 mins" },
  { id: "kala-jamun", name: "Caramelized Kala Jamun", category: "sweets", categoryName: "Salad, Sweets & Drinks", desc: "Deep dark caramelized mawa jamun with a rich dry fruit center.", price: 25, unit: "pc", img: "assets/images/menu_pastry.png", tag: "Rich Sweet", prepTime: "3 mins" },
  { id: "dahi", name: "Fresh Clay-Pot Sweet Dahi", category: "sweets", categoryName: "Salad, Sweets & Drinks", desc: "Thick creamy homestyle curd served chilled in traditional earthen cup.", price: 25, unit: "cup", img: "assets/images/menu_pastry.png", tag: "Cooling", prepTime: "2 mins" },
  { id: "lassi", name: "Punjabi Malai Sweet Lassi", category: "sweets", categoryName: "Salad, Sweets & Drinks", desc: "Thick churned creamy sweet yogurt drink topped with clotted malai and crushed pistachios.", price: 40, unit: "glass", img: "assets/images/menu_matcha.png", tag: "Signature Drink", prepTime: "5 mins" },
  { id: "cold-drinks", name: "Assorted Chilled Cold Drinks", category: "sweets", categoryName: "Salad, Sweets & Drinks", desc: "Chilled bottle of Sprite, Thums Up, Coca-Cola, or Fanta served over ice.", price: 20, unit: "bottle", img: "assets/images/menu_coldbrew.png", tag: "Chilled", prepTime: "2 mins" },
  { id: "packaged-water", name: "Packaged Mineral Water (1L)", category: "sweets", categoryName: "Salad, Sweets & Drinks", desc: "Pure packaged drinking mineral water.", price: 20, unit: "bottle", img: "assets/images/menu_coldbrew.png", tag: "Pure", prepTime: "1 min" },

  // ── BAKERY, PATTIES & CAKES ──
  { id: "veg-patties", name: "Crispy Veg Puff Patties", category: "bakery", categoryName: "Bakery & Cakes", desc: "Flaky golden multi-layered puff pastry stuffed with spiced potato and sweet pea mixture.", price: 20, unit: "pc", img: "assets/images/menu_pastry.png", tag: "Hot & Crispy", prepTime: "4 mins" },
  { id: "paneer-patties", name: "Spiced Paneer Puff Patties", category: "bakery", categoryName: "Bakery & Cakes", desc: "Flaky puff pastry bursting with seasoned cottage cheese bhurji and herbs.", price: 30, unit: "pc", img: "assets/images/menu_pastry.png", tag: "Bestseller", prepTime: "4 mins" },
  { id: "cheese-patties", name: "Loaded Cheese Puff Patties", category: "bakery", categoryName: "Bakery & Cakes", desc: "Golden crust loaded with creamy melted cheese and oregano seasoning.", price: 35, unit: "pc", img: "assets/images/menu_pastry.png", tag: "Cheesy", prepTime: "4 mins" },
  { id: "butter-patties", name: "Rich Butter Puff Patties", category: "bakery", categoryName: "Bakery & Cakes", desc: "Extra flaky butter-layered puff pastry filled with mild seasoned vegetables.", price: 30, unit: "pc", img: "assets/images/menu_pastry.png", tag: "Buttery", prepTime: "4 mins" },
  { id: "pastry", name: "Fresh Chocolate / Pineapple Pastry", category: "bakery", categoryName: "Bakery & Cakes", desc: "Layers of moist sponge cake, rich chocolate ganache / fruit compote and whipped cream.", price: 35, unit: "slice", img: "assets/images/menu_pastry.png", tag: "Bakery Special", prepTime: "2 mins" },
  { id: "cream-roll", name: "Crispy Vanilla Cream Roll", category: "bakery", categoryName: "Bakery & Cakes", desc: "Crisp flaky baked pastry horn generously filled with sweet vanilla whipped cream.", price: 15, unit: "pc", img: "assets/images/menu_pastry.png", tag: "Childhood Favorite", prepTime: "2 mins" },
  { id: "cup-cake", name: "Frosting Cup Cake", category: "bakery", categoryName: "Bakery & Cakes", desc: "Soft buttery sponge cupcake crowned with delicate vanilla-cocoa frosting swirl.", price: 25, unit: "pc", img: "assets/images/menu_pastry.png", tag: "Sweet", prepTime: "2 mins" },
  { id: "choco-roll", name: "Dark Chocolate Roll", category: "bakery", categoryName: "Bakery & Cakes", desc: "Crisp chocolate-glazed wafer roll filled with rich dark cocoa cream.", price: 30, unit: "pc", img: "assets/images/menu_pastry.png", tag: "Chocolate", prepTime: "2 mins" },
  { id: "celebration-cake", name: "Fresh Celebration Cake", category: "bakery", categoryName: "Bakery & Cakes", desc: "Freshly baked customized celebration cake for birthdays and gatherings. Available in Black Forest, Truffle & Pineapple.", price: 250, unit: "pound", img: "assets/images/menu_pastry.png", tag: "Custom Made", prepTime: "Pre-order" }
];

// ── STATE VARIABLES ──
let activeCategory = "all";
let searchQuery = "";
let cartItems = {};
let selectedPortions = {};
// ── INIT ON DOM READY ──
function initApp() {
  initTheme();
  initNavbar();
  initMobileDrawer();
  initMenuRenderer();
  initIntersectionObserver();
  initDishModal();
  initReservationForm();
  initCouponCopyButtons();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

// ── 2. THEME SWITCHER LOGIC (DARK LUXURY MODE) ──
function initTheme() {
  const savedTheme = localStorage.getItem("gs_theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcons(savedTheme);

  document.querySelectorAll(".theme-toggle-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("gs_theme", newTheme);
      updateThemeIcons(newTheme);
      showToast(newTheme === "dark" ? "🌙 Dark Luxury Mode Enabled" : "☀️ Warm Day Mode Enabled");
    });
  });
}

function updateThemeIcons(theme) {
  document.querySelectorAll(".theme-toggle-btn").forEach(btn => {
    btn.innerHTML = theme === "dark" ? "☀️" : "🌙";
    btn.setAttribute("title", theme === "dark" ? "Switch to Warm Day Mode" : "Switch to Dark Luxury Mode");
  });
}

// ── 3. NAVBAR & MOBILE DRAWER ──
function initNavbar() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }, { passive: true });
}

function initMobileDrawer() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const mobileOverlay = document.getElementById("mobileOverlay");

  if (!mobileMenuBtn || !mobileDrawer) return;

  function toggleDrawer(open) {
    const shouldOpen = open !== undefined ? open : !mobileDrawer.classList.contains("open");
    mobileDrawer.classList.toggle("open", shouldOpen);
    if (mobileOverlay) mobileOverlay.classList.toggle("open", shouldOpen);
    mobileMenuBtn.classList.toggle("open", shouldOpen);
    document.body.style.overflow = shouldOpen ? "hidden" : "";
  }

  mobileMenuBtn.addEventListener("click", () => toggleDrawer());
  if (mobileOverlay) mobileOverlay.addEventListener("click", () => toggleDrawer(false));

  document.querySelectorAll(".mobile-drawer-links a").forEach(link => {
    link.addEventListener("click", () => toggleDrawer(false));
  });
}

// ── 4. MENU RENDERER WITH LIVE SEARCH & CATEGORY PILLS ──
function initMenuRenderer() {
  const menuContainer = document.getElementById("menu-grid-container");
  if (!menuContainer) return;

  const searchInput = document.getElementById("menuSearchInput");
  const searchClear = document.getElementById("searchClearBtn");
  const pillTabs = document.querySelectorAll(".pill-tab");

  function syncCategoryFromHash() {
    const hash = window.location.hash.replace("#", "").trim();
    if (hash) {
      const matchingPill = Array.from(pillTabs).find(p => p.dataset.category === hash);
      if (matchingPill) {
        pillTabs.forEach(p => p.classList.remove("active"));
        matchingPill.classList.add("active");
        activeCategory = hash;
      }
    }
  }

  syncCategoryFromHash();
  window.addEventListener("hashchange", () => {
    syncCategoryFromHash();
    renderFilteredDishes();
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      if (searchClear) searchClear.style.display = searchQuery ? "flex" : "none";
      renderFilteredDishes();
    });
  }

  if (searchClear && searchInput) {
    searchClear.addEventListener("click", () => {
      searchInput.value = "";
      searchQuery = "";
      searchClear.style.display = "none";
      renderFilteredDishes();
      searchInput.focus();
    });
  }

  pillTabs.forEach(pill => {
    pill.addEventListener("click", () => {
      pillTabs.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeCategory = pill.dataset.category || "all";
      renderFilteredDishes();
    });
  });

  renderFilteredDishes();
}

function renderFilteredDishes() {
  const container = document.getElementById("menu-grid-container");
  if (!container) return;

  const filtered = MENU_DATA.filter(dish => {
    const matchesCategory = activeCategory === "all" || dish.category === activeCategory;
    const matchesSearch = !searchQuery || 
      dish.name.toLowerCase().includes(searchQuery) ||
      dish.desc.toLowerCase().includes(searchQuery) ||
      dish.categoryName.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <div style="font-size: 3rem; margin-bottom: 12px;">🌿</div>
        <h3 style="font-family: var(--font-display); color: var(--text-heading); margin-bottom: 8px;">No dishes found</h3>
        <p style="font-size: 0.9rem;">Try searching for another dish like "Paneer", "Dosa", "Pizza", or "Thali".</p>
      </div>
    `;
    return;
  }

  if (activeCategory === "all" && !searchQuery) {
    const categoriesMap = {};
    filtered.forEach(dish => {
      if (!categoriesMap[dish.categoryName]) categoriesMap[dish.categoryName] = [];
      categoriesMap[dish.categoryName].push(dish);
    });

    let html = "";
    for (const [catName, dishes] of Object.entries(categoriesMap)) {
      html += `
        <div class="category-group-header">
          <h2 class="category-group-title">${catName}</h2>
          <span class="category-group-count">${dishes.length} Items</span>
        </div>
        <div class="dish-grid">
          ${dishes.map(dish => createDishCardHTML(dish)).join("")}
        </div>
      `;
    }
    container.innerHTML = html;
  } else {
    container.innerHTML = `
      <div class="category-group-header">
        <h2 class="category-group-title">${searchQuery ? `Search Results for "${searchQuery}"` : filtered[0]?.categoryName}</h2>
        <span class="category-group-count">${filtered.length} Items</span>
      </div>
      <div class="dish-grid">
        ${filtered.map(dish => createDishCardHTML(dish)).join("")}
      </div>
    `;
  }

  bindDishCardEvents();
  triggerFadeAnimations();
}

function createDishCardHTML(dish) {
  const isPortion = dish.hasPortions;
  const currentPortion = selectedPortions[dish.id] || "half";
  const displayPrice = isPortion 
    ? (currentPortion === "half" ? dish.priceHalf : dish.priceFull)
    : dish.price;

  return `
    <div class="dish-card fade-up" id="card-${dish.id}" data-dish-id="${dish.id}">
      <div class="dish-img-wrap" onclick="openDishModal('${dish.id}')">
        <img src="${dish.img}" alt="${dish.name}" class="dish-img" loading="lazy" />
        <div class="dish-top-badges">
          <span class="veg-badge" title="100% Pure Veg"></span>
          <span class="dish-tag">${dish.tag || "Fresh"}</span>
        </div>
      </div>
      <div class="dish-body">
        <div class="dish-header" onclick="openDishModal('${dish.id}')">
          <h3 class="dish-title">${dish.name}</h3>
        </div>
        <p class="dish-desc">${dish.desc}</p>
        
        <div class="dish-pricing-area">
          ${isPortion ? `
            <div class="portion-toggle-row">
              <button type="button" class="portion-btn ${currentPortion === 'half' ? 'active' : ''}" data-portion="half" data-dish="${dish.id}">Half ₹${dish.priceHalf}</button>
              <button type="button" class="portion-btn ${currentPortion === 'full' ? 'active' : ''}" data-portion="full" data-dish="${dish.id}">Full ₹${dish.priceFull}</button>
            </div>
          ` : ''}
          <div class="dish-footer-row" onclick="openDishModal('${dish.id}')">
            <div class="dish-price">
              <span class="dish-price-prefix">₹</span><span class="dish-price-val" id="price-val-${dish.id}">${displayPrice}</span>
              ${dish.unit ? `<span style="font-size:0.75rem; color:var(--text-muted); font-weight:400;"> / ${dish.unit}</span>` : ''}
            </div>
          </div>
          <button type="button" class="btn-view-detail" onclick="openDishModal('${dish.id}')">
            <span>👁️ View Details</span> <span>→</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

function bindDishCardEvents() {
  document.querySelectorAll(".portion-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const dishId = btn.dataset.dish;
      const portion = btn.dataset.portion;
      selectedPortions[dishId] = portion;

      const parentRow = btn.closest(".portion-toggle-row");
      parentRow.querySelectorAll(".portion-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const dish = MENU_DATA.find(d => d.id === dishId);
      if (dish) {
        const priceVal = portion === "half" ? dish.priceHalf : dish.priceFull;
        const priceEl = document.getElementById(`price-val-${dishId}`);
        if (priceEl) priceEl.textContent = priceVal;
      }
    });
  });
}

// ── 5. WHATSAPP DIRECT ORDERING ──
function addToCart(dishId) {
  const dish = MENU_DATA.find(d => d.id === dishId);
  if (!dish) return;
  window.open(`https://wa.me/919876543210?text=Hello%20Restro%2C%20I%20want%20to%20order%20${encodeURIComponent(dish.name)}`, '_blank');
}

window.openCartModal = function() {
  window.open('https://wa.me/919876543210?text=Hello%20Restro%2C%20I%20want%20to%20place%20an%20order', '_blank');
};

function applyCouponCode(code) {
  showToast(`Coupon applied! Mention code on WhatsApp for discount ✦`);
}

// ── 7. COUPON COPY INTERACTION ──
function initCouponCopyButtons() {
  document.querySelectorAll(".btn-copy-code").forEach(btn => {
    btn.addEventListener("click", () => {
      const code = btn.dataset.code;
      if (code) {
        applyCouponCode(code);
        openCartModal();
      }
    });
  });
}

// ── 8. COMPREHENSIVE DISH DETAILS MODAL ENGINE ──
let modalCurrentDish = null;
let modalSelectedPortion = "half";
let modalSelectedSpice = "Medium";
let modalSelectedAddons = [];

function getDishMeta(dish) {
  const cat = dish.category;

  // Taste Profile
  let taste = "Medium Spiced 🟡";
  if (["sweets", "bakery", "breakfast"].includes(cat) || dish.id.includes("butter") || dish.id.includes("cream")) {
    taste = "Mild & Creamy 🟢";
  } else if (dish.id.includes("chilli") || dish.id.includes("schezwan") || dish.id.includes("spicy")) {
    taste = "Fiery Hot 🌶️";
  }

  // Ingredients
  let ingredients = ["Fresh Vegetables", "House Spices", "Pure Oil"];
  if (cat === "curries") {
    ingredients = ["Farm Fresh Paneer", "Cashew Makhani Gravy", "Amul Butter", "Kashmiri Red Chilli", "Whole Garam Masala"];
  } else if (cat === "pizza") {
    ingredients = ["Hand-rolled Dough", "Real Mozzarella Cheese", "San Marzano Sauce", "Fresh Bell Peppers", "Oregano"];
  } else if (cat === "dosa") {
    ingredients = ["Fermented Rice Batter", "Spiced Potato Masala", "Pure Butter", "Mustard Seeds", "Fresh Coconut Chutney"];
  } else if (cat === "noodles" || cat === "starters") {
    ingredients = ["Fresh Noodles / Wrappers", "Garden Cabbage & Carrots", "Dark Soy & Garlic", "Scallions"];
  } else if (cat === "sweets" || cat === "bakery") {
    ingredients = ["Pure Desi Ghee", "Whole Milk Mawa", "Kesar Saffron", "Cardamom", "Pistachios"];
  }

  // Allergens
  let allergens = [];
  if (["curries", "pizza", "dosa", "sweets", "burgers"].some(k => cat === k) || dish.id.includes("paneer") || dish.id.includes("cheese")) {
    allergens.push("🥛 Contains Dairy");
  }
  if (dish.id.includes("shahi") || dish.id.includes("makhani") || cat === "sweets") {
    allergens.push("🥜 Cashew Nuts");
  }
  if (["pizza", "burgers", "noodles", "bakery", "starters"].includes(cat)) {
    allergens.push("🌾 Contains Gluten");
  }
  if (allergens.length === 0) allergens.push("🌿 No Common Allergens");

  // Serving size
  const serves = ["curries", "rice", "pizza"].includes(cat) ? "👥 Serves 1-2 Persons" : "👤 Single Serving";

  // Nutrition
  let cal = 320, protein = 12, carbs = 34, fat = 14;
  if (cat === "curries") { cal = 380; protein = 16; carbs = 22; fat = 24; }
  else if (cat === "pizza") { cal = 420; protein = 14; carbs = 48; fat = 18; }
  else if (cat === "dosa") { cal = 290; protein = 8; carbs = 42; fat = 10; }
  else if (cat === "sweets") { cal = 340; protein = 6; carbs = 52; fat = 14; }

  return { taste, ingredients, allergens, serves, cal, protein, carbs, fat };
}

function initDishModal() {
  let modal = document.getElementById("dishModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "dishModal";
    modal.className = "dish-modal";
    modal.style.display = "none";
    modal.innerHTML = `
      <div class="dish-modal-card">
        <button class="dish-modal-close" onclick="closeDishModal()">&times;</button>
        
        <!-- Large High Quality Image Wrapper with Overlay Badges -->
        <div class="dish-modal-img-wrap">
          <img src="assets/images/seasonal_food.png" id="modalDishImg" class="dish-modal-img" alt="Dish Preview" onerror="this.src='assets/images/seasonal_food.png'" />
          <div class="modal-overlay-badges">
            <span class="modal-badge-pill" id="modalBadgeVeg">🌿 100% Pure Veg</span>
            <span class="modal-badge-pill" id="modalBadgeTag" style="background:var(--gold); color:#121c0e;">⭐ Bestseller</span>
          </div>
        </div>

        <div class="dish-modal-content">
          <!-- Category & Title -->
          <div style="font-size:0.75rem; font-weight:800; color:var(--moss); text-transform:uppercase; letter-spacing:0.12em; margin-bottom:4px;" id="modalDishCat">Category</div>
          <h2 id="modalDishTitle" style="font-family:var(--font-display); color:var(--text-heading); margin-bottom:10px; font-size:1.8rem; line-height:1.2;"></h2>

          <!-- Meta Strip: Serving Size, Prep Time, Taste Profile -->
          <div class="modal-meta-strip">
            <span class="meta-chip" id="modalDishServes">👥 Serves 1-2</span>
            <span class="meta-chip" id="modalDishPrepTime">⏱️ 15 mins</span>
            <span class="meta-chip" id="modalDishTaste" style="color:var(--amber);">Medium Spiced 🟡</span>
          </div>

          <!-- Detailed Description (Taste & Preparation Style) -->
          <div class="modal-section-title">Preparation & Speciality</div>
          <p id="modalDishDesc" style="color:var(--text-primary); font-size:0.92rem; line-height:1.6; margin-bottom:18px; background:var(--bg-secondary); padding:14px 18px; border-radius:var(--radius-sm); border:1px solid var(--border-color);"></p>

          <!-- Portion Selection (If Applicable) -->
          <div id="modalPortionWrap" style="margin-bottom:18px; display:none;">
            <div class="modal-section-title">Select Serving Size</div>
            <div class="portion-toggle-row">
              <button type="button" class="portion-btn active" id="modalPortionHalf" onclick="setModalPortion('half')">Half Portion</button>
              <button type="button" class="portion-btn" id="modalPortionFull" onclick="setModalPortion('full')">Full Portion</button>
            </div>
          </div>

          <!-- Customization Options (Spice Level & Add-ons) -->
          <div class="modal-section-title">Customization Options</div>
          <div class="customization-block" style="margin-bottom:20px;">
            <div style="font-size:0.78rem; font-weight:700; color:var(--text-heading); margin-bottom:6px;">Choose Spice Preference:</div>
            <div class="spice-level-selector">
              <button type="button" class="spice-btn" onclick="setModalSpice('Mild')">Mild 🟢</button>
              <button type="button" class="spice-btn active" onclick="setModalSpice('Medium')">Medium 🟡</button>
              <button type="button" class="spice-btn" onclick="setModalSpice('Extra Spicy')">Extra Spicy 🌶️</button>
            </div>

            <div style="font-size:0.78rem; font-weight:700; color:var(--text-heading); margin-top:14px; margin-bottom:6px;">Add-on Extras:</div>
            <div>
              <label class="addon-checkbox-row">
                <span>🧀 Extra Amul Cheese (+₹30)</span>
                <input type="checkbox" id="chkCheese" onchange="toggleModalAddon('Extra Cheese', 30, this.checked)" />
              </label>
              <label class="addon-checkbox-row">
                <span>🧈 Extra Pure Butter (+₹20)</span>
                <input type="checkbox" id="chkButter" onchange="toggleModalAddon('Extra Butter', 20, this.checked)" />
              </label>
              <label class="addon-checkbox-row">
                <span>🥣 Extra Mint Chutney / Garlic Dip (+₹15)</span>
                <input type="checkbox" id="chkDip" onchange="toggleModalAddon('Extra Dip', 15, this.checked)" />
              </label>
            </div>
          </div>

          <!-- Ingredients & Allergens -->
          <div class="modal-section-title">Ingredients & Allergen Info</div>
          <div class="tag-pills-row" id="modalIngredientsRow"></div>
          <div class="tag-pills-row" id="modalAllergensRow"></div>

          <!-- Nutritional Information -->
          <div class="modal-section-title">Nutritional Information (Approx.)</div>
          <div class="nutrition-grid" style="margin-bottom:24px;">
            <div class="nutrition-box"><strong id="modalNutrCal">380 kcal</strong><span>Calories</span></div>
            <div class="nutrition-box"><strong id="modalNutrProtein">16g</strong><span>Protein</span></div>
            <div class="nutrition-box"><strong id="modalNutrCarbs">24g</strong><span>Carbs</span></div>
            <div class="nutrition-box"><strong id="modalNutrFat">22g</strong><span>Fats</span></div>
          </div>

          <!-- "You May Also Like" Recommendations -->
          <div class="modal-section-title">You May Also Like</div>
          <div class="recommendations-grid" id="modalRecGrid" style="margin-bottom:24px;"></div>

          <!-- Price & Dual Action CTAs -->
          <div style="display:flex; justify-content:space-between; align-items:center; border-top:2px solid var(--border-color); padding-top:20px; flex-wrap:wrap; gap:16px;">
            <div>
              <span style="font-size:0.72rem; color:var(--text-muted); text-transform:uppercase; font-weight:800; letter-spacing:0.08em; display:block;">Total Price</span>
              <div id="modalDishPrice" style="font-family:var(--font-display); font-size:1.6rem; font-weight:700; color:var(--text-heading);"></div>
            </div>
            <div style="display:flex; gap:10px; flex-wrap:wrap;">
              <a href="visit.html#reservation-form" class="btn-secondary" style="padding:12px 20px; font-size:0.82rem; border-color:var(--border-color); text-decoration:none;">📅 Reserve Table</a>
              <a id="modalAddBtn" href="https://wa.me/919876543210" target="_blank" class="btn-whatsapp" style="padding:12px 24px; text-decoration:none; font-size:0.88rem;">💬 Order Now on WhatsApp →</a>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeDishModal();
    });
  }
}

function updateModalPriceAndLink() {
  if (!modalCurrentDish) return;
  
  let basePrice = modalCurrentDish.hasPortions 
    ? (modalSelectedPortion === "half" ? modalCurrentDish.priceHalf : modalCurrentDish.priceFull)
    : modalCurrentDish.price;

  let total = parseInt(basePrice) + modalSelectedAddons.reduce((acc, curr) => acc + curr.price, 0);

  document.getElementById("modalDishPrice").textContent = `₹${total}`;
  
  const addBtn = document.getElementById("modalAddBtn");
  const msg = `Hello Restro, I want to order ${modalCurrentDish.name} (${modalSelectedPortion}, ${modalSelectedSpice} spice) ${modalSelectedAddons.length ? 'with ' + modalSelectedAddons.map(a => a.name).join(', ') : ''}. Total: ₹${total}`;
  addBtn.href = `https://wa.me/919876543210?text=${encodeURIComponent(msg)}`;
}

window.setModalPortion = function(p) {
  modalSelectedPortion = p;
  document.getElementById("modalPortionHalf").classList.toggle("active", p === "half");
  document.getElementById("modalPortionFull").classList.toggle("active", p === "full");
  updateModalPriceAndLink();
};

window.setModalSpice = function(s) {
  modalSelectedSpice = s;
  document.querySelectorAll(".spice-btn").forEach(btn => btn.classList.toggle("active", btn.textContent.includes(s)));
  updateModalPriceAndLink();
};

window.toggleModalAddon = function(name, price, checked) {
  if (checked) {
    modalSelectedAddons.push({ name, price });
  } else {
    modalSelectedAddons = modalSelectedAddons.filter(a => a.name !== name);
  }
  updateModalPriceAndLink();
};

window.openDishModal = function(dishId) {
  const dish = MENU_DATA.find(d => d.id === dishId);
  if (!dish) return;

  modalCurrentDish = dish;
  modalSelectedPortion = "half";
  modalSelectedSpice = "Medium";
  modalSelectedAddons = [];

  const modal = document.getElementById("dishModal");
  if (!modal) return;

  const meta = getDishMeta(dish);

  // High quality image & badges
  const imgEl = document.getElementById("modalDishImg");
  if (imgEl) imgEl.src = dish.img || "assets/images/seasonal_food.png";

  document.getElementById("modalBadgeTag").textContent = dish.tag ? `⭐ ${dish.tag}` : "⭐ Chef's Pick";
  document.getElementById("modalDishCat").textContent = dish.categoryName || "Specialty Dish";
  document.getElementById("modalDishTitle").textContent = dish.name;
  document.getElementById("modalDishDesc").textContent = dish.desc;

  // Meta strip
  document.getElementById("modalDishServes").textContent = meta.serves;
  document.getElementById("modalDishPrepTime").textContent = `⏱️ ${dish.prepTime || '12 mins'} Prep`;
  document.getElementById("modalDishTaste").textContent = meta.taste;

  // Portion toggle setup
  const portionWrap = document.getElementById("modalPortionWrap");
  if (dish.hasPortions) {
    portionWrap.style.display = "block";
    document.getElementById("modalPortionHalf").textContent = `Half Portion (₹${dish.priceHalf})`;
    document.getElementById("modalPortionFull").textContent = `Full Portion (₹${dish.priceFull})`;
    setModalPortion("half");
  } else {
    portionWrap.style.display = "none";
  }

  // Reset spice buttons
  document.querySelectorAll(".spice-btn").forEach(btn => {
    btn.classList.toggle("active", btn.textContent.includes("Medium"));
  });

  // Reset checkboxes
  const cb1 = document.getElementById("chkCheese"); if (cb1) cb1.checked = false;
  const cb2 = document.getElementById("chkButter"); if (cb2) cb2.checked = false;
  const cb3 = document.getElementById("chkDip"); if (cb3) cb3.checked = false;

  // Ingredients & Allergens
  document.getElementById("modalIngredientsRow").innerHTML = meta.ingredients.map(ing => `<span class="ing-chip">🥬 ${ing}</span>`).join("");
  document.getElementById("modalAllergensRow").innerHTML = meta.allergens.map(al => `<span class="allergen-chip">${al}</span>`).join("");

  // Nutrition
  document.getElementById("modalNutrCal").textContent = `${meta.cal} kcal`;
  document.getElementById("modalNutrProtein").textContent = `${meta.protein}g`;
  document.getElementById("modalNutrCarbs").textContent = `${meta.carbs}g`;
  document.getElementById("modalNutrFat").textContent = `${meta.fat}g`;

  // Recommendations ("You May Also Like")
  const recs = MENU_DATA.filter(d => d.category === dish.category && d.id !== dish.id).slice(0, 2);
  const recGrid = document.getElementById("modalRecGrid");
  if (recs.length > 0) {
    recGrid.innerHTML = recs.map(r => `
      <div class="rec-dish-card" onclick="openDishModal('${r.id}')">
        <img src="${r.img}" class="rec-dish-img" alt="${r.name}" />
        <div class="rec-dish-info">
          <h5>${r.name}</h5>
          <span>₹${r.hasPortions ? r.priceHalf : r.price}</span>
        </div>
      </div>
    `).join("");
  } else {
    recGrid.innerHTML = `<p style="font-size:0.8rem; color:var(--text-muted);">Explore our full menu for more varieties!</p>`;
  }

  updateModalPriceAndLink();

  modal.style.display = "flex";
  requestAnimationFrame(() => {
    modal.classList.add("open");
  });
  document.body.style.overflow = "hidden";
};

window.closeDishModal = function() {
  const modal = document.getElementById("dishModal");
  if (modal) {
    modal.classList.remove("open");
    setTimeout(() => {
      modal.style.display = "none";
    }, 280);
  }
  document.body.style.overflow = "";
};

// ── 9. RESERVATION FORM & SEATING ENGINE ──
window.setSeatingChoice = function(element, choiceName) {
  document.querySelectorAll(".seating-chip").forEach(chip => chip.classList.remove("active"));
  element.classList.add("active");
  const hiddenInput = document.getElementById("res-seating");
  if (hiddenInput) hiddenInput.value = choiceName;
};

window.updateSlotAvailability = function() {
  const timeSelect = document.getElementById("res-time");
  const pill = document.getElementById("availabilityPill");
  if (!timeSelect || !pill) return;

  const timeVal = timeSelect.value;
  if (timeVal.includes("8:30")) {
    pill.className = "availability-status-pill status-limited";
    pill.innerHTML = "<span>🟡 Limited Availability — Only 2 Tables Left for 8:30 PM!</span>";
  } else {
    pill.className = "availability-status-pill status-available";
    pill.innerHTML = "<span>🟢 Table Available for Selected Slot (Instant Booking)</span>";
  }
};

function initReservationForm() {
  const form = document.getElementById("reservationForm");
  if (!form) return;

  // Set default min date to today
  const dateInput = document.getElementById("res-date");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;
    if (!dateInput.value) dateInput.value = today;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("res-name")?.value || "Guest";
    const phone = document.getElementById("res-phone")?.value || "";
    const email = document.getElementById("res-email")?.value || "";
    const date = document.getElementById("res-date")?.value || "Today";
    const time = document.getElementById("res-time")?.value || "7:30 PM";
    const guests = document.getElementById("res-guests")?.value || "4 Guests";
    const seating = document.getElementById("res-seating")?.value || "Indoor Fine Dining";
    const occasion = document.getElementById("res-occasion")?.value || "Regular Dining";
    const specialReq = document.getElementById("res-request")?.value || "None";

    let addons = [];
    if (document.getElementById("chkAddonCake")?.checked) addons.push("🎂 Birthday Cake (+₹499)");
    if (document.getElementById("chkAddonFlowers")?.checked) addons.push("🌹 Candlelight & Rose Petals (+₹299)");
    if (document.getElementById("chkAddonSparkler")?.checked) addons.push("✨ Sparklers & Welcome Drinks (+₹199)");

    const addonsText = addons.length > 0 ? `%0A✨ *Add-ons:* ${addons.join(", ")}` : "";
    const notesText = specialReq !== "None" ? `%0A📝 *Special Request:* ${encodeURIComponent(specialReq)}` : "";

    showToast(`🎉 Table Confirmed for ${name} (${guests}) on ${date} at ${time}!`);

    const waMessage = `📅 *TABLE RESERVATION CONFIRMATION — RESTRO*%0A━━━━━━━━━━━━━━━━━━%0A👤 *Name:* ${encodeURIComponent(name)}%0A📞 *Phone:* ${phone}%0A📧 *Email:* ${encodeURIComponent(email)}%0A📅 *Date & Time:* ${date} at ${time}%0A👥 *Guests:* ${guests}%0A🪑 *Seating:* ${encodeURIComponent(seating)}%0A🎉 *Occasion:* ${encodeURIComponent(occasion)}${addonsText}${notesText}%0A📍 *Status:* Confirmed`;

    setTimeout(() => {
      window.open(`https://wa.me/919876543210?text=${waMessage}`, "_blank");
    }, 600);

    form.reset();
  });
}

// ── 9.1 FAQ ACCORDION TOGGLE ──
window.toggleFaq = function(element) {
  const item = element.closest(".faq-item");
  if (!item) return;

  const isActive = item.classList.contains("active");
  document.querySelectorAll(".faq-item.active").forEach(other => {
    if (other !== item) other.classList.remove("active");
  });

  item.classList.toggle("active", !isActive);
};

// ── 10. ANIMATIONS & TOAST ──
function initIntersectionObserver() {
  triggerFadeAnimations();
}

function triggerFadeAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".fade-up:not(.visible)").forEach(el => {
    observer.observe(el);
  });
}

function showToast(message) {
  let toast = document.getElementById("gs-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "gs-toast";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.style.opacity = "1";
  toast.style.transform = "translateX(-50%) translateY(0)";

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(-50%) translateY(20px)";
  }, 2200);
}

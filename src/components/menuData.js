// menuData.js
export const menuCategories = [
  {
    id: 'breakfast',
    name: 'Breakfast',
    description: 'Start your day with our delicious breakfast options',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=250&fit=crop',
    items: [
      {
        id: 1,
        name: 'Classic Pancakes',
        description: 'Fluffy pancakes served with maple syrup and butter',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
        isVegetarian: true
      },
      {
        id: 2,
        name: 'Avocado Toast',
        description: 'Fresh avocado on sourdough with cherry tomatoes and feta',
        price: 14.99,
        image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=300&h=200&fit=crop',
        isVegetarian: true
      },
      {
        id: 3,
        name: 'Full English Breakfast',
        description: 'Eggs, bacon, sausage, beans, toast, and grilled tomatoes',
        price: 18.99,
        image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=300&h=200&fit=crop',
        isVegetarian: false
      },
      {
        id: 4,
        name: 'French Toast',
        description: 'Golden French toast with fresh berries and powdered sugar',
        price: 13.99,
        image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=300&h=200&fit=crop',
        isVegetarian: true
      }
    ]
  },
  {
    id: 'snacks',
    name: 'Snacks',
    description: 'Light bites and appetizers perfect for any time',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=250&fit=crop',
    items: [
      {
        id: 5,
        name: 'Chicken Wings',
        description: 'Crispy wings with your choice of sauce',
        price: 11.99,
        image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=300&h=200&fit=crop',
        isVegetarian: false
      },
      {
        id: 6,
        name: 'Mozzarella Sticks',
        description: 'Golden fried mozzarella with marinara sauce',
        price: 8.99,
        image: 'https://images.unsplash.com/photo-1548340748-6d2b7d7da280?w=300&h=200&fit=crop',
        isVegetarian: true
      },
      {
        id: 7,
        name: 'Loaded Nachos',
        description: 'Tortilla chips with cheese, jalapeños, and sour cream',
        price: 10.99,
        image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=300&h=200&fit=crop',
        isVegetarian: true
      },
      {
        id: 8,
        name: 'Onion Rings',
        description: 'Crispy beer-battered onion rings with ranch dip',
        price: 7.99,
        image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=300&h=200&fit=crop',
        isVegetarian: true
      }
    ]
  },
  {
    id: 'beverages',
    name: 'Beverages',
    description: 'Refreshing drinks to complement your meal',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=250&fit=crop',
    items: [
      {
        id: 9,
        name: 'Fresh Orange Juice',
        description: 'Freshly squeezed orange juice',
        price: 4.99,
        image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=200&fit=crop',
        isVegetarian: true
      },
      {
        id: 10,
        name: 'Iced Coffee',
        description: 'Cold brew coffee with ice and your choice of milk',
        price: 3.99,
        image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300&h=200&fit=crop',
        isVegetarian: true
      },
      {
        id: 11,
        name: 'Fresh Smoothie',
        description: 'Mixed berry smoothie with yogurt and honey',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1553530979-ac4ddd2b4e7a?w=300&h=200&fit=crop',
        isVegetarian: true
      },
      {
        id: 12,
        name: 'Hot Chocolate',
        description: 'Rich hot chocolate with whipped cream and marshmallows',
        price: 4.49,
        image: 'https://images.unsplash.com/photo-1542990253-a781e04c0082?w=300&h=200&fit=crop',
        isVegetarian: true
      }
    ]
  },
  {
    id: 'lunch',
    name: 'Lunch',
    description: 'Hearty meals to fuel your afternoon',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=250&fit=crop',
    items: [
      {
        id: 13,
        name: 'Grilled Chicken Sandwich',
        description: 'Grilled chicken breast with lettuce, tomato, and mayo',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=300&h=200&fit=crop',
        isVegetarian: false
      },
      {
        id: 14,
        name: 'Caesar Salad',
        description: 'Fresh romaine lettuce with Caesar dressing and croutons',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1512852939750-1305098529bf?w=300&h=200&fit=crop',
        isVegetarian: true
      },
      {
        id: 15,
        name: 'Fish and Chips',
        description: 'Beer-battered fish with crispy fries and tartar sauce',
        price: 17.99,
        image: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?w=300&h=200&fit=crop',
        isVegetarian: false
      },
      {
        id: 16,
        name: 'Vegetarian Pasta',
        description: 'Penne pasta with mixed vegetables in tomato sauce',
        price: 14.99,
        image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=300&h=200&fit=crop',
        isVegetarian: true
      }
    ]
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Sweet treats to end your meal perfectly',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=250&fit=crop',
    items: [
      {
        id: 17,
        name: 'Chocolate Cake',
        description: 'Rich chocolate cake with chocolate frosting',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop',
        isVegetarian: true
      },
      {
        id: 18,
        name: 'Cheesecake',
        description: 'New York style cheesecake with berry compote',
        price: 7.99,
        image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=300&h=200&fit=crop',
        isVegetarian: true
      },
      {
        id: 19,
        name: 'Ice Cream Sundae',
        description: 'Vanilla ice cream with chocolate sauce and whipped cream',
        price: 5.99,
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300&h=200&fit=crop',
        isVegetarian: true
      }
    ]
  }
];

// Helper function to get category by ID
export const getCategoryById = (categoryId) => {
  return menuCategories.find(category => category.id === categoryId);
};

// Helper function to get all category names
export const getAllCategoryNames = () => {
  return menuCategories.map(category => ({ id: category.id, name: category.name }));
};
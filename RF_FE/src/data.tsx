export const apartments = [
  {
    id: 1,
    name: "Jane Smith",
    phone: 9876543210,
    price: 1500,
    apartment: {
      description: "Modern one-bedroom apartment with a beautiful garden view.",
      floor: 2,
      size: 85,
      rooms: 1,
    },
    address: {
      city: "Los Angeles",
      street: "Sunset Boulevard",
      buildingNumber: 456,
      neighborhood: "West Hollywood",
      zipCode: 90069,
    },
    tags: {
      elevator: true,
      parkingLot: true,
      airConditioning: true,
      balcony: true,
      accessibleToDisabled: true,
      equipped: true,
      petFriendly: true,
      storage: false,
    },
    planType: "silver",
  },
  {
    id: 2,
    name: "Michael Johnson",
    phone: 1122334455,
    price: 1000,
    apartment: {
      description:
        "Cozy studio apartment with easy access to public transportation.",
      floor: 1,
      size: 60,
      rooms: 1,
    },
    address: {
      city: "Chicago",
      street: "Michigan Avenue",
      buildingNumber: 789,
      neighborhood: "The Loop",
      zipCode: 60601,
    },
    tags: {
      elevator: false,
      parkingLot: false,
      airConditioning: true,
      balcony: false,
      accessibleToDisabled: false,
      equipped: false,
      petFriendly: true,
      storage: true,
    },
    planType: "bronze",
  },
  {
    id: 3,
    name: "Emily Davis",
    phone: 5566778899,
    price: 1800,
    apartment: {
      description:
        "Luxury three-bedroom apartment with a panoramic view of the lake.",
      floor: 10,
      size: 200,
      rooms: 3,
    },
    address: {
      city: "San Francisco",
      street: "Market Street",
      buildingNumber: 321,
      neighborhood: "SOMA",
      zipCode: 94103,
    },
    tags: {
      elevator: true,
      parkingLot: true,
      airConditioning: true,
      balcony: true,
      accessibleToDisabled: true,
      equipped: true,
      petFriendly: false,
      storage: true,
    },
    planType: "platinum",
  },
];

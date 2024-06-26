export interface TApartments {
  name: string;
  phone: string;
  price: string;
  apartment: {
    description: string;
    floor: string;
    size: string;
    rooms: string;
  };
  address: {
    city: string;
    street: string;
    buildingNumber: string;
    zipCode: string;
  };
  tags: {
    elevator: boolean;
    parkingLot: boolean;
    airConditioning: boolean;
    balcony: boolean;
    accessibleToDisabled: boolean;
    equipped: boolean;
    petFriendly: boolean;
    storage: boolean;
  };
  owner?: string;
  _id?: string;
  createdAt?: string;
}

export interface TTags {
  elevator: boolean;
  parkingLot: boolean;
  airConditioning: boolean;
  balcony: boolean;
  accessibleToDisabled: boolean;
  equipped: boolean;
  petFriendly: boolean;
  storage: boolean;
}

export interface TApartmentsStore {
  apartments: TApartments[];
  singleApartment: TApartments | null;
  userApartments: TApartments[];
}

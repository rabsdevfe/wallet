const DEFAULT_TRANSACTIONS = [
  {
    // id: "1",
    type: "deposit" as const,
    createdAt: new Date("2024-01-15T10:30:00"),
    amount: 1500.0,
    description: "Depósito inicial",
    user_name: "Sistema",
    user_id: "system",
    picture_path: null,
  },
  {
    // id: "2",
    type: "transfer" as const, //TODO: modified to enum
    createdAt: new Date("2024-01-16T14:20:00"),
    amount: -250.5,
    description: "Transferencia a Juan Pérez",
    user_name: "Juan Pérez",
    user_id: "user_123",
    picture_path: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    // id: "3",
    type: "payment" as const,
    createdAt: new Date("2024-01-17T09:15:00"),
    amount: -89.99,
    description: "Pago servicios públicos",
    user_name: "Empresa Eléctrica",
    user_id: "company_456",
    picture_path: null,
  },
  {
    // id: "4",
    type: "transfer" as const,
    createdAt: new Date("2024-01-18T16:45:00"),
    amount: -320.0,
    description: "Transferencia a María García",
    user_name: "María García",
    user_id: "user_789",
    picture_path: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    // id: "5",
    type: "deposit" as const,
    createdAt: new Date("2024-01-19T11:00:00"),
    amount: 750.25,
    description: "Depósito desde cuenta bancaria",
    user_name: "Banco Nacional",
    user_id: "bank_001",
    picture_path: null,
  },
];

const DEFAULT_BALANCE = {
  user_id: "id_test",
  balance: 150000,
  last_modification_date: new Date("2024-01-19T11:00:00"), // Fecha más reciente de las transacciones
  last_modification_transaction_id: null, // Se actualizará cuando tengamos IDs auto-generados
};

export { DEFAULT_TRANSACTIONS, DEFAULT_BALANCE };

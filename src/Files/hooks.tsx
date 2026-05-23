export const useGetFolder = () => {
  return [
    {
      id: crypto.randomUUID(),
      name: "root",
      isFolder: true,
      isOpen: true,
      children: [
        {
          id: crypto.randomUUID(),
          name: "src",
          isFolder: true,
          isOpen: false,
          children: [],
        },
      ],
    },
  ];
};

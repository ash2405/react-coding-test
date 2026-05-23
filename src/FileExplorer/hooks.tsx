export const useGetFolder = () => {
  return [
    {
      name: "root",
      isFolder: true,
      isOpen: true,
      children: [
        {
          name: "src",
          isFolder: true,
          isOpen: false,
          children: [],
        },
      ],
    },
  ];
};

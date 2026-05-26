export const useGetChecks = () => {
  return [
    {
      id: crypto.randomUUID(),
      name: "Parent-1",
      isCheck: false,
      child: [
        {
          id: crypto.randomUUID(),
          name: "Child-1-1",
          isCheck: false,
          child: [
            {
              id: crypto.randomUUID(),
              name: "SubChild-1-1-1",
              isCheck: false,
              child: [
                {
                  id: crypto.randomUUID(),
                  name: "DeepChild-1-1-1",
                  isCheck: false,
                  child: [],
                },
                {
                  id: crypto.randomUUID(),
                  name: "DeepChild-1-1-2",
                  isCheck: false,
                  child: [],
                },
              ],
            },
          ],
        },

        {
          id: crypto.randomUUID(),
          name: "Child-1-2",
          isCheck: false,
          child: [
            {
              id: crypto.randomUUID(),
              name: "SubChild-1-2-1",
              isCheck: false,
              child: [
                {
                  id: crypto.randomUUID(),
                  name: "DeepChild-1-2-1",
                  isCheck: false,
                  child: [
                    {
                      id: crypto.randomUUID(),
                      name: "LastChild-1-2-1",
                      isCheck: false,
                      child: [],
                    },
                  ],
                },
              ],
            },
            {
              id: crypto.randomUUID(),
              name: "SubChild-1-2-2",
              isCheck: false,
              child: [],
            },
          ],
        },

        {
          id: crypto.randomUUID(),
          name: "Child-1-3",
          isCheck: false,
          child: [
            {
              id: crypto.randomUUID(),
              name: "SubChild-1-3-1",
              isCheck: false,
              child: [],
            },
            {
              id: crypto.randomUUID(),
              name: "SubChild-1-3-2",
              isCheck: false,
              child: [
                {
                  id: crypto.randomUUID(),
                  name: "DeepChild-1-3-2-1",
                  isCheck: false,
                  child: [],
                },
                {
                  id: crypto.randomUUID(),
                  name: "DeepChild-1-3-2-2",
                  isCheck: false,
                  child: [],
                },
              ],
            },
          ],
        },

        {
          id: crypto.randomUUID(),
          name: "Child-1-4",
          isCheck: false,
          child: [
            {
              id: crypto.randomUUID(),
              name: "SubChild-1-4-1",
              isCheck: false,
              child: [
                {
                  id: crypto.randomUUID(),
                  name: "DeepChild-1-4-1-1",
                  isCheck: false,
                  child: [
                    {
                      id: crypto.randomUUID(),
                      name: "Level-5-1",
                      isCheck: false,
                      child: [],
                    },
                    {
                      id: crypto.randomUUID(),
                      name: "Level-5-2",
                      isCheck: false,
                      child: [],
                    },
                  ],
                },
              ],
            },

            {
              id: crypto.randomUUID(),
              name: "SubChild-1-4-2",
              isCheck: false,
              child: [],
            },

            {
              id: crypto.randomUUID(),
              name: "SubChild-1-4-3",
              isCheck: false,
              child: [
                {
                  id: crypto.randomUUID(),
                  name: "DeepChild-1-4-3-1",
                  isCheck: false,
                  child: [],
                },
              ],
            },
          ],
        },

        {
          id: crypto.randomUUID(),
          name: "Child-1-5",
          isCheck: false,
          child: [
            {
              id: crypto.randomUUID(),
              name: "SubChild-1-5-1",
              isCheck: false,
              child: [
                {
                  id: crypto.randomUUID(),
                  name: "DeepChild-1-5-1-1",
                  isCheck: false,
                  child: [
                    {
                      id: crypto.randomUUID(),
                      name: "LastChild-1",
                      isCheck: false,
                      child: [],
                    },
                    {
                      id: crypto.randomUUID(),
                      name: "LastChild-2",
                      isCheck: false,
                      child: [],
                    },
                    {
                      id: crypto.randomUUID(),
                      name: "LastChild-3",
                      isCheck: false,
                      child: [
                        {
                          id: crypto.randomUUID(),
                          name: "FinalChild-1",
                          isCheck: false,
                          child: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },

            {
              id: crypto.randomUUID(),
              name: "SubChild-1-5-2",
              isCheck: false,
              child: [],
            },

            {
              id: crypto.randomUUID(),
              name: "SubChild-1-5-3",
              isCheck: false,
              child: [
                {
                  id: crypto.randomUUID(),
                  name: "DeepChild-1-5-3-1",
                  isCheck: false,
                  child: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ];
};
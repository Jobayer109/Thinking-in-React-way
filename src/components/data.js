import shortid from "shortid";

const task = {
  id: shortid.generate(),
  subtitle: "Subtitle",
  createdAt: "2024-02-07T02:54:36.169Z",
  tags: [
    {
      id: shortid.generate(),
      icon: "C",
      text: "Completed",
    },
    {
      id: shortid.generate(),
      icon: "X",
      text: "Cancelled",
    },
    {
      id: shortid.generate(),
      icon: "P",
      text: "In progress",
    },
  ],
  comments: [
    {
      id: shortid.generate(),
      avatar: "https://avatars.githubusercontent.com/u/108192726?v=4",
      user: "Jobayer",
      status: "Done",
      text: "uhwdw wdhhwoiqqw qwhwohoiqwed wqhwwed wnkjcds ahduds jadbc  jsbd sahb",
    },
  ],
  tasks: [
    {
      id: shortid.generate(),
      name: "School opening",
      status: "Completed",
      comment:
        "I'm a web developer. I always love to explore new things. Besides, I always try to be a better developer than yesterday",
    },
    {
      id: shortid.generate(),
      name: "Start Tuition",
      status: "Cancelled",
      comment:
        "I always love to explore new things. Besides, I always try to be a better developer than yesterday",
    },
    {
      id: shortid.generate(),
      name: "System Design Class",
      status: "Processing",
      comment:
        "I always love to explore new things. Besides, I always try to be a better developer than yesterday",
    },
  ],
};

export default task;

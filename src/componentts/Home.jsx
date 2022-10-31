const Home = () => {
  const links = [
    {
      name: "Twitter Link",
      to: "https://twitter.com/swiss_45",
      id: "twitter",
    },
    { name: "Zuri Team", to: "https://training.zuri.team/", id: "btn__zuri" },
    { name: "Zuri Books", to: " http://books.zuri.team", id: "books" },
    {
      name: "Python Books",
      to: "https://books.zuri.team/python-for-beginners?ref_id=ayomikolade2003",
      id: "book__python",
    },
    {
      name: "Background Check For Coders",
      to: "https://background.zuri.team",
      id: "pitch",
    },
    {
      name: "Design Books",
      to: "https://books.zuri.team/design-rules",
      id: "book__design",
    },
  ];
  return (
    <div className="mx-auto flex flex-col items-center justify-center py-[64px] px-[112px]">
      {" "}
      <div>
        {" "}
        <img
          src={profilePic}
          className="h-[88px] w-[88px] rounded-[275px] object-cover"
          alt="profile_picture"
          id="profile__img"
        />{" "}
      </div>{" "}
      <h2 className="my-4 text-xl font-bold">Kolade Ayomide</h2>{" "}
      <a
        href="https://app.slack.com/client/T042F7V19Q8/C041V6WKAUS/rimeto_profile/U0489MLK4RK"
        id="slack"
        className="my-2 hidden h-[76px] w-[1152px] items-center justify-center rounded-lg border border-[#EAECF0] bg-[#EAECF0] text-center"
      >
        {" "}
        Slack Link{" "}
      </a>{" "}
      {links.map((link, i) => (
        <a
          href={link.to}
          key={i}
          id={link.id}
          target="_blank"
          className="my-2 flex h-[76px] w-[1152px] items-center justify-center rounded-lg border border-[#EAECF0] bg-[#EAECF0] text-center"
        >
          {" "}
          {link.name}{" "}
        </a>
      ))}{" "}
    </div>
  );
};
export default Home;

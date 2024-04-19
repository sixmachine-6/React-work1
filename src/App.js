import { useState } from "react";

export default function App() {
  const [mobileModal, setMobileModal] = useState(false);
  return (
    <>
      {/* <Main /> */}
      <NavBar />
      <Button />
      <MainLayer />
      <Main>
        <Filters />
        <MiniNavBar />
        <Posts
          backgroundSrc="mountains"
          profileSrc="kamra"
          views="1.4k"
          heading="✍️ Article"
          name="Sarthak Kamra"
          description="What if famous brands had regular fonts? Meet RegulaBrands!"
          about=" I’ve worked in UX for the better part of a decade. F..."
        />
        <Posts
          backgroundSrc="window"
          profileSrc="sarah"
          views="4.8k"
          heading="Education"
          name="Sarah West"
          description="Tax Benefits for Investment under National Pension Scheme launched by Government"
          about=" I’ve worked in UX for the better part of a decade. F..."
        />
        <Posts
          backgroundSrc="car"
          profileSrc="ronal"
          views="800"
          heading="Meetup"
          name="Ronal Jones"
          description="Finance & Investment Elite Social  Mixer @Lujiazui"
          tag="fri,12 Oct,2018"
          location="Ahemdabad, India"
          btndesc="Visit Website"
        />
        <Posts
          profileSrc="joseph"
          views="1.7k"
          heading="Job"
          name="Joseph Gray"
          description="Software Developer II"
          tag="Innovaccer Analytic..."
          location="Noida, India"
          btndesc="Apply on Timejobs"
        />
      </Main>
      <ModalButton mobileModal={mobileModal} setMobileModal={setMobileModal} />
      {mobileModal && <MobileModal />}
    </>
  );
}

// function Main() {
//   return (
//     <div style={{ background: "radek-grzybowski-66457-unsplash.png" }}>
//       Hello React
//     </div>
//   );
// }

function MainLayer() {
  return (
    <div className="mainLayer d-flex">
      <img className="background" src="background.png" alt="background" />
      <div className="mainHeading pt-4 h-200 position-relative">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button>&larr;</button>
          <button class="rounded-10 p-2">Join Group</button>
        </div>
        <div className="mainHead">
          <h3>Computer Engineering</h3>
          <p>142,765 Computer Engineers follow this</p>
        </div>
      </div>
    </div>
  );
}

function NavBar() {
  const [modal, setModal] = useState(false);
  return (
    <nav
      class="nav d-none h-40  d-lg-flex  justify-content-between align-items-center"
      style={{ margin: "2rem" }}
    >
      <img src="logo.png" alt="logo" />
      <div class="search">
        <input
          type="text"
          placeholder="Search for your favourite groups in ATG"
        />
      </div>

      <button class="btn button h-35" onClick={() => setModal(!modal)}>
        create Account. <span> It's Free!</span>
      </button>
      {modal && <Modal />}
    </nav>
  );
}

function Filters() {
  return (
    <div class=" m-3 d-flex justify-content-between align-items-center d-lg-none">
      <h4>Posts(368)</h4>
      <button class="filter">Filters:All</button>
    </div>
  );
}

function Button() {
  return <button className="open">p</button>;
}
function Main({ children }) {
  return (
    <div class="d-flex justify-content-center">
      <main className="main">{children}</main>
      <Search />
    </div>
  );
}
function Posts({
  backgroundSrc,
  heading,
  description,
  about,
  profileSrc,
  name,
  views,
  tag,
  location,
  btndesc,
}) {
  return (
    <div
      class="posts d-flex
    flex-column mb-4"
    >
      {backgroundSrc && (
        <img className="img" src={`${backgroundSrc}.jpeg`} alt="mountains" />
      )}
      <div className="container">
        <h4>{heading}</h4>
        <div className="intro">
          <h4>{description}</h4>
          <h4>...</h4>
        </div>
        <div>
          {about ? (
            <p className="desc">{about}</p>
          ) : (
            <div className="info">
              <div
                style={{
                  width: "100%",
                  display: "flex",
                }}
              >
                <p>{tag}</p>
                <p>{location}</p>
              </div>
              <div
                style={{
                  padding: "0.5rem",
                  height: "40px",
                  borderRadius: "13px",
                  border: "2px solid red",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                {btndesc}
              </div>
            </div>
          )}
        </div>
        <div className=" d-flex  justify-content-between align-items-center">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={`${profileSrc}.jpeg`}
              alt="kamra"
              style={{
                marginRight: "2.5rem",
                height: "50px",
                width: "50px",
                borderRadius: "50%",
              }}
            />
            <div>
              <h4>{name}</h4>
              <p>{views} views</p>
            </div>
          </div>
          <button className="button">Share</button>
        </div>
      </div>
    </div>
  );
}

const array = [
  {
    img: "leisure.jpeg",
    title: "Leisure",
  },
  {
    img: "activism.jpeg",
    title: "Activism",
  },
  {
    img: "mba.jpeg",
    title: "MBA",
  },
  {
    img: "philosophy.jpeg",
    title: "Philosophy",
  },
];
function Search() {
  return (
    <modal className="location  d-none d-lg-flex  flex-column align-items-center">
      <div className="searchBox">
        <div>
          <input
            className="searchbox"
            type="text"
            placeholder="Enter Your Location"
          />
        </div>
        <p>
          Your location will help us serve better and extend a personalised
          experience.
        </p>
      </div>
      <h4>RECOMMENDED GROUPS</h4>
      <ul className="list">
        {array &&
          array.map((el) => (
            <li class="d-flex justify-content-between align-items-center">
              <div
                style={{
                  fontSize: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img src={el.img} alt={el.title} />
                <p>{el.title}</p>
              </div>
              <button>Follow</button>
            </li>
          ))}
      </ul>
    </modal>
  );
}

function MiniNavBar() {
  return (
    <nav className="mininavbar d-lg-flex  justify-content-between align-items-center">
      <div>
        <a>All Posts(32)</a>
        <a>Article</a>
        <a>Event</a>
        <a>Education</a>

        <a>Job</a>
      </div>
      <div>
        <button>Write Post</button>
        <button style={{ color: "white", background: " #0d6efd" }}>
          Join Group
        </button>
      </div>
    </nav>
  );
}
function Modal() {
  const [modal, setModal] = useState(true);
  return (
    <>
      {modal && (
        <div className="modal  d-lg-block d-flex  flex-column position-absolute ">
          <div
            style={{ color: "green" }}
            class="modal-header custom-modal-header d-flex justify-content-center mb-4 "
          >
            Let's learn, share &amp; inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </div>
          <div
            style={{ margin: "2.5rem" }}
            class="d-flex justify-content-between  align-items-center mb-4"
          >
            <h3>Create Account</h3>
            <p>
              Already have an account?<a class="text-primary">Sign in</a>
            </p>
          </div>
          <div class="inputBox  d-flex  justify-content-center align-items-center">
            <div
              class=" d-flex  
            flex-column justify-content-center align-items-center"
            >
              <div
                style={{
                  width: "350px",
                  height: "37px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <input
                  className="inputfield"
                  type="text"
                  placeholder="First Name"
                />
                <input
                  className="inputfield"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <input
                style={{ width: "100%" }}
                type="email"
                placeholder="Email"
              />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm password" />

              <button
                style={{ background: "#0d6efd" }}
                class="btn btn-primary rounded-5"
              >
                Create Account
              </button>
              <button>Sign Up with Facebook</button>
              <button>Sign Up with Google</button>
            </div>
            <div className="input">
              <img
                className="loginImage"
                src="signup-OCG-APNN.svg"
                alt="signup"
              />
              <p style={{ fontSize: "1rem" }}>
                By signing up, you agree to our Terms &amp; conditions, Privacy
                policy
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function ModalButton({ mobileModal, setMobileModal }) {
  return (
    <button
      onClick={() => setMobileModal(!mobileModal)}
      class="btn btn rounded-circle  position-fixed d-lg-none"
      style={{ bottom: "18px", right: "18px" }}
    >
      <img
        src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='icon/image/edit_24px'%3e%3cpath%20id='icon/image/edit_24px_2'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.6588%203C17.4088%203%2017.1488%203.1%2016.9588%203.29L15.1288%205.12L18.8788%208.87L20.7088%207.04C21.0988%206.65%2021.0988%206.02%2020.7088%205.63L18.3688%203.29C18.1688%203.09%2017.9188%203%2017.6588%203ZM14.0588%209.02L14.9788%209.94L5.91878%2019H4.99878V18.08L14.0588%209.02ZM2.99878%2017.25L14.0588%206.19L17.8088%209.94L6.74878%2021H2.99878V17.25Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e"
        alt="write a post"
        height="24"
        width="24"
      />
    </button>
  );
}

function MobileModal() {
  return (
    <div className="mobile  d-flex  flex-column align-items-center d-lg-none">
      <div>
        <h3>Create Account</h3>
      </div>
      <div class="mobileInput  d-flex  flex-column align-items-center">
        <div className="mobileInputBox d-flex">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm password" />

        <button
          class="btn btn-primary rounded-5 "
          style={{ background: "#0d6efd" }}
        >
          Create Account
        </button>
        <button>Sign Up with Facebook</button>
        <button>Sign Up with Google</button>
      </div>
    </div>
  );
}

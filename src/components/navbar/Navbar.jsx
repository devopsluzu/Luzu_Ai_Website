// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import "@styles/navbar/Navbar.css";
// import Link from "next/link";
// import Image from "next/image";
// import { IoIosMenu } from "react-icons/io";
// import DefaultProfile from "@public/Images/navbar/default.svg";
// import { UserAuth } from "@context/AuthContext";
// import { useRouter } from "next/navigation";
// import prfeclogo from "@public/Images/navbar/prfec-logo.svg"
// import { IoIosArrowDown } from "react-icons/io";
// import { IoIosArrowUp } from "react-icons/io";
// import { RxCross2 } from "react-icons/rx";

// export const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [hover, setHover] = useState(false);
//   const [dropOpen, setDropOpen] = useState(false);
//   const [dropOpen1, setDropOpen1] = useState(false);
//   const [dropOpen2, setDropOpen2] = useState(false);
//   const router = useRouter();
//   const dropdownRef = useRef(null);

//   const menuRef = useRef(null);
//   const { user, logOut, loading } = UserAuth();

//   const handleServiceDropDown = () => {
//     setDropOpen((prev) => !prev);
//   };
//   const handleServiceDropDown1 = () => {
//     setDropOpen1((prev) => !prev);
//   };

//   const handleServiceDropDown2 = () => {
//     setDropOpen2((prev) => !prev);
//   };
//   const handleMenuClick = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const handleLinkClick = () => {
//     setMenuOpen(false);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setMenuOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleDropDown = () => {
//     setHover(!hover);
//   };

//   const handleLogOut = async () => {
//     try {
//       console.log("Logut Working");
//       await logOut();
//       setHover(false);
//       router.push("/");
//       router.reload();
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   function handleNavigation(targetPath) {
//     if (targetPath.startsWith("#")) {
//       setMenuOpen(false);
//       setHover(false);
//       document.body.classList.remove("overflow");
//       const element = document.querySelector(targetPath);
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     } else if (targetPath.startsWith("http")) {
//       window.location.href = targetPath;
//     } else if (router.pathname !== targetPath) {
//       setMenuOpen(false);
//       setHover(false);
//       document.body.classList.remove("overflow");
//       router.push(targetPath);
//     }
//   }
//   if (loading) {
//     return null; // Or a loading spinner, if preferred
//   }
//   const handleItemClick = () => {
//     setDropOpen(false); // Close the dropdown
//   };

//   return (
//     <div className="navbar bg-[#F6F7FD]">
//       <div className="navbar-container">
//         <div className="navbar-logo">
//           <Link href="/" onClick={handleLinkClick}>
//             <Image height={14} src={prfeclogo} alt="Logo" />
//           </Link>
//         </div>

//         {!loading && !user ? (
//           <div className="navbar-contents">
//             <div className="flex gap-2">
//               <div
//                 onClick={handleServiceDropDown}
//                 className="navbar-contents-category"
//               >
//                 Services
//               </div>
//               <div className="mt-1">
//                 {dropOpen ? (
//                   <IoIosArrowUp onClick={handleServiceDropDown} />
//                 ) : (
//                   <IoIosArrowDown onClick={handleServiceDropDown} />
//                 )}
//               </div>
//             </div>

//             {dropOpen && (
//               <div
//                 className="navbar-service-dropdown flex justify-center"
//                 ref={dropdownRef}
//               >
//                 <Link
//                   
//                   href="https://business.prfec.ai/seo"
//                   onClick={handleItemClick}
//                 >
//                   SEO
//                 </Link>
//                 <Link
//                   
//                   href="https://business.prfec.ai/content"
//                   onClick={handleItemClick}
//                 >
//                   Content
//                 </Link>
//                 <Link
//                   
//                   href="https://business.prfec.ai/email"
//                   onClick={handleItemClick}
//                 >
//                   Email
//                 </Link>
//                 <Link
//                   
//                   href="https://business.prfec.ai/sma"
//                   onClick={handleItemClick}
//                 >
//                   Social Media Advertising
//                 </Link>
//                 <Link
//                   
//                   href="https://business.prfec.ai/payperclick"
//                   onClick={handleItemClick}
//                 >
//                   Pay Per Click
//                 </Link>
//                 <Link
//                   
//                   href="https://business.prfec.ai/analytics"
//                   onClick={handleItemClick}
//                 >
//                   Analytics and Reporting
//                 </Link>
//               </div>
//             )}
//             <div className="navbar-contents-category">Resources</div>
//             <div className="mt-1">
//               {dropOpen1 ? (
//                 <IoIosArrowUp onClick={handleServiceDropDown1} />
//               ) : (
//                 <IoIosArrowDown onClick={handleServiceDropDown1} />
//               )}
//             </div>
//             <div className="navbar-contents-category">Contact us</div>
//             <div className="mt-1">
//               {dropOpen2 ? (
//                 <IoIosArrowUp onClick={handleServiceDropDown2} />
//               ) : (
//                 <IoIosArrowDown onClick={handleServiceDropDown2} />
//               )}
//             </div>
//             <Link
//               href="https://app.prfec.ai"
//               className="navbar-login"
//               onClick={handleLinkClick}
//               style={{ marginLeft: "10px" }}
//             >
//               Get Started
//             </Link>
//           </div>
//         ) : (
//           <div className="navbar-contents">
//             <div className="navbar-profile-container" onClick={handleDropDown}>
//               <Image
//                 className="navbar-profile-image"
//                 src={user?.profilePicURL || DefaultProfile}
//                 alt="Profile"
//                 width={28}
//                 height={28}
//                 layout="fixed"
//                 objectFit="cover"
//                 quality={100}
//               />
//             </div>

//             {hover && (
//               <div className="navbar-profile-dropdown">
//                 <div className="navbar-contents-category">Services</div>
                
//                 <div className="navbar-contents-category">Resources</div>
//                 <div className="navbar-contents-category">Contact us</div>
//                 <Link
//                   href="/account-settings"
//                   onClick={() => handleNavigation("/account-settings")}
//                 >
//                   <p>Profile</p>
//                 </Link>
//                 <Link
//                   href="/account-security"
//                   onClick={() => handleNavigation("/account-security")}
//                 >
//                   <p>Security</p>
//                 </Link>
//                 <p onClick={handleLogOut}>Logout</p>
//               </div>
//             )}
//           </div>
//         )}

//         <div className="navbar-menu-icons">
//           {!menuOpen && (
//             <IoIosMenu
//               className="size-9"
//               alt="Menu"
//               onClick={handleMenuClick}
//             />
//           )}
//           {menuOpen && (
//             <RxCross2
//               alt="Close"
//               className="size-9"
//               onClick={handleMenuClick}
//             />
//           )}
//         </div>

//         {menuOpen && (
//           <div
//             ref={menuRef}
//             className="flex flex-col justify-center h-[170px] w-[150px] border border-[var(--box-border)] rounded-2xl absolute right-0 top-[50px] bg-white"
//           >
//             {!loading && !user ? (
//               <>
//               <div className="">
//                 <div onClick={handleServiceDropDown} className="navbar-contents-category pl-5 hover:bg-gray-200">Services</div>
//                 {dropOpen && (
                  
//              <div className="ml-[-220px]"><div
//                 className="navbar-service-dropdown flex justify-center w-[220px] p-0 text-center border border-[var(--box-border)] 
//                 rounded-[16px] bg-[var(--prfec-white)] absolute top-[20px]  flex flex-col gap-2 h-[220px]"
//                 ref={dropdownRef}
//               >
//                 <Link
//                   
//                   href="https://business.prfec.ai/seo"
//                   onClick={handleItemClick}
//                 >
//                   SEO
//                 </Link>
//                 <Link
//                   
//                   href="https://business.prfec.ai/content"
//                   onClick={handleItemClick}
//                 >
//                   Content
//                 </Link>
//                 <Link
//                   
//                   href="https://business.prfec.ai/email"
//                   onClick={handleItemClick}
//                 >
//                   Email
//                 </Link>
//                 <Link
//                   
//                   href="https://business.prfec.ai/sma"
//                   onClick={handleItemClick}
//                 >
//                   Social Media Advertising
//                 </Link>
//                 <Link
//                   
//                   href="https://business.prfec.ai/payperclick"
//                   onClick={handleItemClick}
//                 >
//                   Pay Per Click
//                 </Link>
//                 <Link
//                   
//                   href="https://business.prfec.ai/analytics"
//                   onClick={handleItemClick}
//                 >
//                   Analytics and Reporting
//                 </Link>
//               </div></div> 
//             )}
//                 <div className="navbar-contents-category pt-2 pl-5">Resources</div>
//                 <div className="navbar-contents-category pl-5 pt-2">Contact us</div>
//                <div className="pt-3 pl-5"> <Link
//                   href="/login"
//                   className="text-black text-[18px] text-white px-4 p-1 bg-[#515CDA] rounded-md border"
//                   onClick={handleLinkClick}
//                 >
//                   Login
//                 </Link></div>
//                 </div>
//               </>
//             ) : (
//               <>
//                 <div className="navbar-contents-category">Services</div>
//                 <div className="navbar-contents-category">Resources</div>
//                 <div className="navbar-contents-category">Contact us</div>
//                 <Link
//                   href="/account-settings"
//                   onClick={() => handleNavigation("/account-settings")}
//                 >
//                   <p>Profile</p>
//                 </Link>
//                 <Link
//                   href="/account-security"
//                   onClick={() => handleNavigation("/account-security")}
//                 >
//                   <p>Security</p>
//                 </Link>
//                 <p onClick={handleLogOut}>Logout</p>
//               </>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };



"use client";
import React, { useState, useEffect, useRef } from "react";
import "@styles/navbar/Navbar.css";
import Link from "next/link";
import Image from "next/image";
import { IoIosMenu } from "react-icons/io";
import DefaultProfile from "@public/Images/navbar/default.svg";
import { UserAuth } from "@context/AuthContext";
import { useRouter } from "next/navigation";
import prfeclogo from "@public/Images/navbar/prfec-logo.svg"
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [dropOpen1, setDropOpen1] = useState(false);
  const [dropOpen2, setDropOpen2] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef(null);

  const menuRef = useRef(null);
  const { user, logOut, loading } = UserAuth();

  const handleServiceDropDown = () => {
    setDropOpen((prev) => !prev);
  };
  const handleServiceDropDown1 = () => {
    setDropOpen1((prev) => !prev);
  };

  const handleServiceDropDown2 = () => {
    setDropOpen2((prev) => !prev);
  };
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropDown = () => {
    setHover(!hover);
  };

  const handleLogOut = async () => {
    try {
      console.log("Logut Working");
      await logOut();
      setHover(false);
      router.push("/");
      router.reload();
    } catch (error) {
      console.log(error);
    }
  };
  function handleNavigation(targetPath) {
    if (targetPath.startsWith("#")) {
      setMenuOpen(false);
      setHover(false);
      document.body.classList.remove("overflow");
      const element = document.querySelector(targetPath);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (targetPath.startsWith("http")) {
      window.location.href = targetPath;
    } else if (router.pathname !== targetPath) {
      setMenuOpen(false);
      setHover(false);
      document.body.classList.remove("overflow");
      router.push(targetPath);
    }
  }
  if (loading) {
    return null; // Or a loading spinner, if preferred
  }
  const handleItemClick = () => {
    setDropOpen(false); // Close the dropdown
  };

  return (
    <div className="navbar bg-[#F6F7FD]">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link href="/" onClick={handleLinkClick}>
            <Image height={13} src={prfeclogo} alt="Logo" />
          </Link>
        </div>

          <div className="navbar-contents">
            <div className="flex gap-1">
              <div onClick={handleServiceDropDown} className="navbar-contents-category">
                Services
              </div>
              <div className="mt-1">
                {dropOpen ? (
                  <IoIosArrowUp onClick={handleServiceDropDown} className="h-[13px] " style={{color:"var(--p-black)"}}/>
                ) : (
                  <IoIosArrowDown onClick={handleServiceDropDown} className="h-[13px] " style={{color:"var(--p-black)"}}/>
                )}
              </div>
            </div>

            {dropOpen && (
              <div
                className="navbar-service-dropdown flex justify-center"
                ref={dropdownRef}
              >
                <Link  href="https://business.prfec.ai/seo" onClick={handleItemClick}>
                  SEO
                </Link>
                <Link 
                  href="https://business.prfec.ai/content"
                  onClick={handleItemClick}
                >
                  Content
                </Link>
                <Link 
                  href="https://business.prfec.ai/email"
                  onClick={handleItemClick}
                >
                  Email
                </Link>
                <Link 
                  href="https://business.prfec.ai/sma"
                  onClick={handleItemClick}
                >
                  Social Media Advertising
                </Link>
                <Link 
                  href="https://business.prfec.ai/payperclick"
                  onClick={handleItemClick}
                >
                  Pay Per Click
                </Link>
                <Link 
                  href="https://business.prfec.ai/analytics"
                  onClick={handleItemClick}
                >
                  Analytics and Reporting
                </Link>
              </div>
            )}

            <Link href='https://blog.prfec.ai' className="navbar-contents-category">Resources</Link>
            <Link href='/contact-sales' className="navbar-contents-category">Contact us</Link>

            <Link href="https://app.prfec.ai" className="navbar-login" style={{ marginLeft: "10px" }}>
              Get Started
            </Link>
          </div>
       

        <div className="navbar-menu-icons">
          {!menuOpen && (
            <IoIosMenu
              className="h-[26px] w-[auto]"
              alt="Menu"
              onClick={handleMenuClick}
              style={{color:"var(--p-black)"}}
            />
          )}
          {menuOpen && (
            <RxCross2
              alt="Close"
              className="h-[26px] w-[auto]"
              onClick={handleMenuClick}
              style={{color:"var(--p-black)"}}
            />
          )}
        </div>

        {menuOpen && (
          <div className='navbar-menu'
            ref={menuRef}
          >
            <div className="flex justify-end  pt-[10px] pb-[10px] ">            
              <RxCross2 alt="Close" className="h-[26px] w-[auto]" onClick={handleMenuClick} style={{color:"var(--p-black)"}}/>
            </div>

              <div className="pt-[8px] flex flex-col gap-[1rem]">
              <div className="flex gap-2 items-center">
                <div onClick={handleServiceDropDown} className="navbar-contents-category">
                  Services
                </div>
                <div className="mt-1">
                  {dropOpen ? (
                    <IoIosArrowUp onClick={handleServiceDropDown} className="h-[15px] " style={{color:"var(--p-black)"}}/>
                  ) : (
                    <IoIosArrowDown onClick={handleServiceDropDown} className="h-[15px] " style={{color:"var(--p-black)"}}/>
                  )}
                </div>
            </div>
            {dropOpen && (
              <div
                className="flex flex-col gap-[0.9rem] pl-[10px] "
                ref={dropdownRef}
              >
                <Link  href="https://business.prfec.ai/seo" onClick={handleItemClick} className="navbar-contents-category">
                  SEO
                </Link>
                <Link className="navbar-contents-category"
                  href="https://business.prfec.ai/content"
                  onClick={handleItemClick}
                >
                  Content
                </Link>
                <Link className="navbar-contents-category"
                  href="https://business.prfec.ai/email"
                  onClick={handleItemClick}
                >
                  Email
                </Link>
                <Link className="navbar-contents-category"
                  href="https://business.prfec.ai/sma"
                  onClick={handleItemClick}
                >
                  Social Media Advertising
                </Link>
                <Link className="navbar-contents-category"
                  href="https://business.prfec.ai/payperclick"
                  onClick={handleItemClick}
                >
                  Pay Per Click
                </Link>
                <Link className="navbar-contents-category"
                  href="https://business.prfec.ai/analytics"
                  onClick={handleItemClick}
                >
                  Analytics and Reporting
                </Link>
              </div>
            )}
              <Link href='https://blog.prfec.ai' className="navbar-contents-category">Resources</Link>
              <Link href='/contact-sales' className="navbar-contents-category">Contact us</Link>
              </div>
           
          </div>
        )}
      </div>
    </div>
  );
};


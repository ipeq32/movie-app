'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { useAtom } from "jotai";
import { user as userAtom } from "@jotai/atoms";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [user] = useAtom(userAtom);
  const [search, setSearch] = useState<boolean>(false);

  const pathname = usePathname();
  useEffect(() => {
    const handleResize = () => {
      const loginWeb = document.getElementById('loginModal')
      const hamburger = document.getElementById('hamburgerModal');
      const modalMobile = document.getElementById('loginModalMobile');

      if (window.innerWidth < 1024) {
        // @ts-ignore
        loginWeb?.close();
      } else {
        // @ts-ignore
        hamburger?.close();
        // @ts-ignore
        modalMobile?.close();
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleModal = () => {
    const modal = document.getElementById('loginModal');
    // @ts-ignore
    modal?.showModal();
  }

  const handleModalMobile = () => {
    const modalMobile = document.getElementById('loginModalMobile');

    // @ts-ignore
    modalMobile?.showModal();
  }

  const handleHamburger = () => {
    const modal = document.getElementById('hamburgerModal');
    // @ts-ignore
    modal?.showModal();
  }

  const links = [
    { label: "Movies", href: "/movies" },
    { label: "TV Series", href: "/tv-series" },
    { label: "Documentaries", href: "/documentaries" },
  ];

  return (
    <>
      <div className="flex justify-end items-center max-lg:hidden gap-4 h-full">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className={`flex items-center mr-3 h-full border-y-2 border-transparent hover:text-violet-300 ${pathname === link.href && "!border-blue-300 text-violet-300"}`}>
            {link.label}
          </Link>
        ))}
        <div className={`flex items-center gap-1 h-full ${!search && "tooltip tooltip-bottom tooltip-accent"}`} data-tip="Search">
          {search && (
            <input
              type="text"
              className="h-2/3 px-2 py-1 border border-gray-300 rounded-md"
              placeholder="Search..."
            />
          )}
          <Icon onClick={() => setSearch(!search)} icon="wpf:search" width="1.3em" height="1.3em" className="cursor-pointer h-full" />
        </div>
        {user ? (
          <>
            <div className="flex items-center h-full tooltip tooltip-bottom tooltip-accent" data-tip="Notification">
              <Icon icon="iconoir:bell-notification" width="1.3em" height="1.3em" className="cursor-pointer h-full" />
            </div>
            <div className="flex items-center h-full tooltip tooltip-bottom tooltip-accent" data-tip="Profile">
              <Icon icon="oui:user" width="1.3em" height="1.3em" className="cursor-pointer h-full" />
            </div>
          </>
        ) : (
          <div className={`flex items-center h-full tooltip tooltip-bottom tooltip-accent`} data-tip="Login">
            <Icon icon="ph:sign-in-bold" width="1.5em" height="1.5em" onClick={() => handleModal()} className="cursor-pointer h-full" />
            <dialog id="loginModal" className="modal">
              <div className="modal-box bg-base-200">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 outline-none">✕</button>
                </form>
                <div role="tablist" className="tabs tabs-lifted">
                  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Login" defaultChecked />
                  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <form method="dialog">
                      <label className="form-control w-full">
                        <div className="label">
                          <span className="label-text">What is your email?</span>
                        </div>
                        <input type="email" placeholder="Email" className="input input-bordered w-full" />
                      </label>
                      <label className="form-control w-full">
                        <div className="label">
                          <span className="label-text">What is your password?</span>
                        </div>
                        <input type="password" placeholder="Password" className="input input-bordered w-full" />
                      </label>
                      <button type="submit" className="btn btn-primary mt-4 w-1/2">Login</button>
                    </form>
                  </div>

                  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Register" />
                  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <form method="dialog">
                      <label className="form-control w-full">
                        <div className="label">
                          <span className="label-text">What is your name?</span>
                        </div>
                        <input type="text" placeholder="Name" className="input input-bordered w-full" />
                      </label>
                      <label className="form-control w-full">
                        <div className="label">
                          <span className="label-text">What is your lastname?</span>
                        </div>
                        <input type="text" placeholder="Lastname" className="input input-bordered w-full" />
                      </label>
                      <label className="form-control w-full">
                        <div className="label">
                          <span className="label-text">What is your email?</span>
                        </div>
                        <input type="email" placeholder="Email" className="input input-bordered w-full" />
                      </label>
                      <label className="form-control w-full">
                        <div className="label">
                          <span className="label-text">What is your password?</span>
                        </div>
                        <input type="password" placeholder="Password" className="input input-bordered w-full" />
                      </label>
                      <label className="form-control w-full">
                        <div className="label">
                          <span className="label-text">Repeat your password.</span>
                        </div>
                        <input type="password" placeholder="Repeat password" className="input input-bordered w-full" />
                      </label>
                      <button type="submit" className="btn btn-primary mt-4 w-1/2">Register</button>
                    </form>
                  </div>
                </div>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        )}
      </div>
      {/* Responsive Mobile 1024px */}
      <div className="flex item h-full lg:hidden">
        <Icon icon="charm:menu-hamburger" width="2.5rem" height="2.5rem" onClick={() => handleHamburger()} className="cursor-pointer h-full" />
        <dialog id="hamburgerModal" className="modal">
          <div className="modal-box bg-base-200">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 outline-none">✕</button>
            </form>
            <div className="flex flex-col items-center justify-center gap-8">
              <div className="flex flex-row justify-center items-center gap-3">
                {links.map((link) => (
                  <Link key={link.href} href={link.href} className={`flex items-center h-full border-y-2 border-transparent hover:text-violet-300 ${pathname === link.href && "!border-blue-300 text-violet-300"}`}>
                    {link.label}
                  </Link>
                ))}
              </div>
              {user ? (
                <>
                  <div className="flex flex-row items-center justify-center gap-4">
                    <div className="flex items-center h-full">
                      <Icon icon="iconoir:bell-notification" width="1.3em" height="1.3em" className="cursor-pointer h-full" />
                      <p className="ml-2">Notification</p>
                    </div>
                    <div className="flex items-center h-full">
                      <Icon icon="oui:user" width="1.3em" height="1.3em" className="cursor-pointer h-full" />
                      <p className="ml-2">Profile</p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex items-center h-full">
                  <button onClick={() => handleModalMobile()} className="flex flex-row justify-center items-center">
                    <Icon icon="ph:sign-in-bold" width="1.5em" height="1.5em" className="cursor-pointer h-full" />
                    <p className="ml-2">Login</p>
                  </button>
                  <dialog id="loginModalMobile" className="modal">
                    <div className="modal-box bg-base-200">
                      <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 outline-none">✕</button>
                      </form>
                      <div role="tablist" className="tabs tabs-lifted">
                        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Login" defaultChecked />
                        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                          <form method="dialog">
                            <label className="form-control w-full">
                              <div className="label">
                                <span className="label-text">What is your email?</span>
                              </div>
                              <input type="email" placeholder="Email" className="input input-bordered w-full" />
                            </label>
                            <label className="form-control w-full">
                              <div className="label">
                                <span className="label-text">What is your password?</span>
                              </div>
                              <input type="password" placeholder="Password" className="input input-bordered w-full" />
                            </label>
                            <button type="submit" className="btn btn-primary mt-4 w-1/2">Login</button>
                          </form>
                        </div>

                        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Register" />
                        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                          <form method="dialog">
                            <label className="form-control w-full">
                              <div className="label">
                                <span className="label-text">What is your name?</span>
                              </div>
                              <input type="text" placeholder="Name" className="input input-bordered w-full" />
                            </label>
                            <label className="form-control w-full">
                              <div className="label">
                                <span className="label-text">What is your lastname?</span>
                              </div>
                              <input type="text" placeholder="Lastname" className="input input-bordered w-full" />
                            </label>
                            <label className="form-control w-full">
                              <div className="label">
                                <span className="label-text">What is your email?</span>
                              </div>
                              <input type="email" placeholder="Email" className="input input-bordered w-full" />
                            </label>
                            <label className="form-control w-full">
                              <div className="label">
                                <span className="label-text">What is your password?</span>
                              </div>
                              <input type="password" placeholder="Password" className="input input-bordered w-full" />
                            </label>
                            <label className="form-control w-full">
                              <div className="label">
                                <span className="label-text">Repeat your password.</span>
                              </div>
                              <input type="password" placeholder="Repeat password" className="input input-bordered w-full" />
                            </label>
                            <button type="submit" className="btn btn-primary mt-4 w-1/2">Register</button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                      <button>close</button>
                    </form>
                  </dialog>
                </div>
              )}
              <div className="flex items-center gap-1 h-full w-3/4" >
                <input
                  type="text"
                  className="h-12 w-full px-2 py-1 border border-gray-300 rounded-md"
                  placeholder="Search..."
                />
                <button className="btn btn-primary">Search</button>
              </div>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </>
  )
};

export default Navigation;
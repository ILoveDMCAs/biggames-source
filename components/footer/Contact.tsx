export {};
// import { FormEvent, useState, useRef } from 'react';
// import { Input } from 'components';
// // import classname from 'classnames';

// import isEmail from 'validator/lib/isEmail';
// // interface ContactI {}

// interface Properties extends HTMLFormControlsCollection {
//   name?: HTMLInputElement;
//   email?: HTMLInputElement;
// }

// interface Data extends HTMLFormElement {
//   readonly elements: Properties;
// }

// // interface StatusMsg {
// //   ok: string;
// //   error: string;
// // }

// export default function Contact(): JSX.Element {
//   const [status, setStatus] = useState<string>('');
//   const [errorName, setStatusName] = useState<string>('');
//   const [errorEmail, setStatusEmail] = useState<string>('');

//   // const mainErrorClasses = classname({
//   //   'bg-error-green w-[300px] p-2': status.startsWith('We'),
//   //   'bg-error-red w-[300px] p-2': status,
//   //   'w-[300px] p-2': !status
//   // });

//   const formRef = useRef<HTMLFormElement>(null);

//   function mySubmit(e: FormEvent<Data>) {
//     e.preventDefault();
//     if (!e.currentTarget.elements.name?.value) {
//       setStatus('PLEASE CHECK THE FIELDS');
//       setStatusName('Please provide your name');
//     }
//     if (!e.currentTarget.elements.email?.value) {
//       setStatus('PLEASE CHECK THE FIELDS');
//       setStatusEmail('Please provide a email adress');
//       return;
//     }

//     if (
//       e.currentTarget.elements.name?.value &&
//       e.currentTarget.elements.email?.value
//     ) {
//       if (!isEmail(e.currentTarget.elements.email?.value)) {
//         e.currentTarget.elements.email.value = '';
//         setStatusEmail('Please provide a valid email adress');
//         return;
//       }

//       //call API PATH
//       setStatus('We will contact you soon');
//       setStatusName('');
//       setStatusEmail('');
//       formRef.current!.reset();
//     }
//   }

//   return (
//     <section className="">
//       <h2 className="footerTitle mb-4">Stay Updated</h2>
//       <form
//         method="post"
//         className="flex flex-col gap-3"
//         onSubmit={mySubmit}
//         ref={formRef}
//         aria-label="Contact form"
//       >
//         <Input name="email" label="EMAIL" errorMessage={errorEmail} />
//         <button
//           className="rounded-full py-3 w-full bg-pageBlue border-2 border-pageBlue text-white font-bold text-xl"
//           type="submit"
//           tabIndex={0}
//         >
//           Sign Up
//         </button>
//       </form>
//     </section>
//   );
// }

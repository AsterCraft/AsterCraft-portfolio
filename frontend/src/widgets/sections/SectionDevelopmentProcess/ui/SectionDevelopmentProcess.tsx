import cn from "classnames";
import StageDescription from "./StageDescription";
import IconStage from "./IconStage";

const SectionDevelopmentProcess = () => {
  return (
    <section className={"bg-ac-eerie-black py-15 text-white"}>
      <div className="app-container">
        <h2>Процес створення сайту</h2>
        <ul className="grid gap-15">
          <li className="grid grid-cols-[auto_1fr] gap-7">
            <IconStage
              className="order-1"
              dots={1}
            />
            <StageDescription
              stage={1}
              className="order-2"
            />
            <div className="hidden"></div>
          </li>

          <li className="grid grid-cols-[auto_1fr] gap-7">
            <IconStage
              className="order-1"
              dots={2}
            />
            <StageDescription
              stage={2}
              className="order-2"
            />
            <div className="hidden"></div>
          </li>

          <li className="grid grid-cols-[auto_1fr] gap-7">
            <IconStage
              className="order-1"
              dots={3}
            />
            <StageDescription
              stage={3}
              className="order-2"
            />
            <div className="hidden"></div>
          </li>

          <li className="grid grid-cols-[auto_1fr] gap-7">
            <IconStage
              className="order-1"
              dots={4}
            />
            <StageDescription
              stage={4}
              className="order-2"
            />
            <div className="hidden"></div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SectionDevelopmentProcess;

// import cn from "classnames";
// import StageDescription from "./StageDescription";
// import IconStage from "./IconStage";

// const SectionDevelopmentProcess = () => {
//   return (
//     <section className={cn("", "bg-ac-eerie-black pt-10 text-white")}>
//       <div className="app-container">
//         <h2>Процес створення сайту</h2>
//         <ul>
//           <li className="grid grid-cols-[auto_1fr] items-center gap-4 md:grid-cols-[2fr_100px_2fr] md:gap-10">
//             <div className="hidden md:block"></div>
//             <IconStage
//               className="order-1"
//               dots={1}
//             />
//             <StageDescription className="order-2 bg-red-500" />
//           </li>
//           <li className="grid grid-cols-[auto_1fr] items-center gap-4 md:grid-cols-[2fr_100px_2fr] md:gap-10">
//             <StageDescription className="order-2 bg-red-500 md:order-1" />
//             <IconStage
//               className="order-1 md:order-2"
//               dots={1}
//             />
//             <div className="hidden md:order-3 md:block"></div>
//           </li>
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default SectionDevelopmentProcess;

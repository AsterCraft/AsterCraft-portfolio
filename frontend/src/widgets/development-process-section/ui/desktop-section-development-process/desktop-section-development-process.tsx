import cn from "classnames";

import { DEVELOPMENT_STAGES } from "../../model/constants";
import { StageDescription } from "../stage-description/stage-description";
import IconStage from "../IconStage";
import TitleSection from "@shared/ui/typography/TitleSection";

import s from "./desktop-section-development-process.module.scss";
import { ConnectorLine } from "../connector-line/connector-line";

export const DesktopSectionDevelopmentProcess = () => {
  return (
    <div>bob</div>
    // <section
    //   className={cn(s.section)}
    //   // className={"bg-ac-eerie-black py-15 text-white"}
    // >
    //   {/* <div className="app-container max-w-[1000px]"> */}
    //   <TitleSection
    //     className={s.titleToSection}
    //     title="Процес створення сайту"
    //   />

    //   <ul
    //     className={cn(s.stagesList, "app-container")}
    //     // className="grid text-lg"
    //   >
    //     <li>
    //       <div></div>
    //       <IconStage dots={1} />
    //       {/* <StageDescription  /> */}
    //       <div></div>
    //     </li>
    //     {/* {DEVELOPMENT_STAGES.map(({ stage, aligment }, index) => {
    //       return (
    //         <li
    //           key={stage}
    //           data-stage={stage}
    //           className={cn(
    //             "grid grid-cols-[auto_1fr] gap-7",
    //             "md:grid-cols-[1fr_auto_1fr] md:gap-14"
    //           )}
    //         >
    //           <div className="order-1 md:order-2">
    //             <IconStage
    //               dots={stage}
    //               stageIndex={index}
    //             />
    //           </div>

    //           <StageDescription
    //             stage={stage}
    //             className={cn(
    //               "order-2",
    //               aligment === "right" ? "md:order-3" : "md:order-1"
    //             )}
    //           />
    //           <div
    //             className={cn(
    //               "hidden",
    //               "md:block",
    //               aligment === "right" ? "md:order-1" : "md:order-3"
    //             )}
    //           ></div>
    //         </li>
    //       );
    //     })} */}
    //   </ul>
    //   {/* </div> */}
    // </section>
  );
};

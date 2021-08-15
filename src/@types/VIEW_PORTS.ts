import {BrowserOptions} from 'puppeteer/index'
export interface IVp{
    /**
         * page width in pixels.
         */
     width?: number | undefined;
     /**
      * page height in pixels.
      */
     height?: number | undefined;
     /**
      * Specify device scale factor (can be thought of as dpr).
      * @default 1
      */
     deviceScaleFactor?: number | undefined;
     /**
      * Whether the meta viewport tag is taken into account.
      * @default false
      */
     isMobile?: boolean | undefined;
     /**
      * Specifies if viewport supports touch events.
      * @default false
      */
     hasTouch?: boolean | undefined;
     /**
      * Specifies if viewport is in landscape mode.
      * @default false
      */
     isLandscape?: boolean | undefined;
}

export const VIEW_PORTS:{ WEB: IVp,MOBILE:IVp } = {
    MOBILE:{
        width: 320,
        height: 480,
        deviceScaleFactor: 1,
        isMobile: true,
        hasTouch: true,
        isLandscape: false
    },
    WEB:{
        width: 1366,
        height: 768,
        deviceScaleFactor: 1,
        isMobile: false,
        hasTouch: false,
        isLandscape: false
    }
}
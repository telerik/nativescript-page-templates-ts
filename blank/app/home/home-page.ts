import { EventData } from "data/observable";
import { Page } from "ui/page";
import { HomeViewModel } from "./home-view-model";
import frameModule = require("ui/frame");

import * as application from "application";

const homeViewModel = new HomeViewModel();

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = homeViewModel;
}

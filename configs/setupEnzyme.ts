import { configure } from "enzyme";
import * as EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
configure({ adapter: new EnzymeAdapter() });

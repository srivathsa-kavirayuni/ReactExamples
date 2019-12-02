import React from "react";
import { shallow } from "enzyme";
import "jest-styled-components";
import Album, {StyledAlbum} from './Album'

describe("<Album />", () => {
    const testData = {
        albumId: 1,
        id: 1,
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url: "https://via.placeholder.com/600/92c952"
    }
    it("should render Album Component ", () => {
        const component = shallow(
            <Album key={testData.id} album={testData}/>
        );
        expect(component.props()).toEqual({id: 1, album: testData});
    });
    it("should have same Styles ", () => {
        const component = shallow(
            <StyledAlbum key={testData.id} album={testData}/>
        );
        expect(component.props()).toEqual({id: 1, album: testData});
    });

})

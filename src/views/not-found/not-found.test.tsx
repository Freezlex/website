import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import NotFoundComponent from "./not-found.component";

it('Should render not-found page', () => {
    render(
        <MemoryRouter>
            <NotFoundComponent/>
        </MemoryRouter>
    )
    screen.findAllByText('Are you lost ?');
});

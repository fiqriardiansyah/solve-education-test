import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import ButtonAnswerAnimated from '../button-answer';

describe('ButtonAnswer component', () => {
    test('render ButtonAnswer component', () => {
        const { getByText } = render(<ButtonAnswerAnimated option="7 o'clock" rightOption="7 o'clock" />);

        expect(getByText("7 o'clock")).toBeInTheDocument();
    });

    test('ButtonAnswer turn green/success when click the right answerd', () => {
        const renderOption = "7 o'clock"
        const userRightPickOption = "7 o'clock"

        const { getByText } = render(<ButtonAnswerAnimated option={renderOption} pickOption={userRightPickOption} rightOption={renderOption} />);

        fireEvent.click(getByText(renderOption));

        expect(getByText(renderOption)).
            toHaveAttribute(
                "class",
                expect.stringMatching(/MuiButton-colorSuccess/) // button have MuiButton-colorSuccess when the answer is right
            )
    });
});
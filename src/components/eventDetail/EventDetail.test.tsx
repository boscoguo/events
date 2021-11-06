import { screen, render } from "@testing-library/react";
import * as redux from "react-redux";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { EventDetail } from ".";

const mockStore = configureMockStore([thunk]);

describe("<EventDetail />", () => {
  const store = mockStore({
    eventsPage: {
      loading:true,
      events: {
        home_team: {
          name: "PERTH KNIGHTS",
          score: 55
        },
      
        away_team: {
          name: "SYDNEY SHARKS",
          score: 59
        }
      }
    }
  })
  it("should have all elements when page loading", async() => {
    render(<Provider store={store}><EventDetail /></Provider>);
    const assoElement = screen.getByText(/Basketball Association/i);
    expect(assoElement).toBeInTheDocument(); 
    const quarterElement = screen.getByText(/Quarter/i);
    expect(quarterElement).toBeInTheDocument();
    const loadingElement = await screen.findByText(/Loading/i);
    expect(loadingElement).toBeInTheDocument();
  })

  it("should return correct data reture from hooks", () => {
    const spy = jest.spyOn(redux, 'useSelector')
    spy.mockReturnValue({
      eventsPage: {
        loading:true,
        events: {
          home_team: {
            name: "PERTH KNIGHTS",
            score: 55
          },
        
          away_team: {
            name: "SYDNEY SHARKS",
            score: 59
          }
        }
      }
    })
  })
})
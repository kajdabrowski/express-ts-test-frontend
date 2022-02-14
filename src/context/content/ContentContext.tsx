import React, { Children, useState, useContext, useEffect } from "react";
import axios from "axios";
import { ContentContextInterface, Article } from "./types";
import { UserContext } from "../user/UserContext";

export const ContentContext =
  React.createContext<ContentContextInterface | null>(null);

const ContentContextProvider: React.FC = (props) => {
  const { token } = useContext(UserContext)!;

  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    if (token) {
      axios
        .get("http://localhost:3000/articles", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setArticles(response.data.content);
        });
    }
  }, [token]);

  const contentContext: ContentContextInterface = { articles };
  return (
    <ContentContext.Provider value={contentContext}>
      {props.children}
    </ContentContext.Provider>
  );
};

export default ContentContextProvider;

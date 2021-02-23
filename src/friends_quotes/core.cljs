(ns friends-quotes.core
  (:require [ajax.core :refer [GET]]
            [reagent.core :as reagent :refer [atom]]))

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"
                          :author "Rita Lino"}))

(defn fetch-link! [state]
  (GET "https://friends-quotes-api.herokuapp.com/quotes/random"
    {:handler (fn [data]
                (swap! state assoc :author (get data "character"))
                (swap! state assoc :text (get data "quote")))
     :error-handler (fn [{:keys [status status-text]}]
                      (js/console.log status status-text))}))

(defn tweet-link [state]
  (str "https://twitter.com/intent/tweet?hashtags=friendsquote&text=" (:text @state) " - " (:author @state)))

(defn quote [state]
  [:div
   [:div.frame
    [:div.quote-container
     [:p.quote-text (:text @state)]
     [:p.quote-author "- " (:author @state)]

     [:div.action-buttons
      [:a {:href (tweet-link state)
           :target "_blank"} "Tweet!"]
      [:button {:on-click #(fetch-link! state)} "Next Quote"]]]]])

(defn start []
  (reagent/render-component [quote app-state]
                            (. js/document (getElementById "app"))))

(defn ^:export init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (start))

(defn stop []
  ;; stop is called before any code is reloaded
  ;; this is controlled by :before-load in the config
  (js/console.log "stop"))

(fetch-link! app-state)
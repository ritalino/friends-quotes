goog.provide('friends_quotes.core');
if (
  typeof friends_quotes !== 'undefined' &&
  typeof friends_quotes.core !== 'undefined' &&
  typeof friends_quotes.core.app_state !== 'undefined'
) {
} else {
  friends_quotes.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(
    new cljs.core.PersistentArrayMap(
      null,
      2,
      [
        new cljs.core.Keyword(null, 'text', 'text', -1790561697),
        'Hello world!',
        new cljs.core.Keyword(null, 'author', 'author', 2111686192),
        'Rita Lino',
      ],
      null
    )
  );
}
friends_quotes.core.fetch_link_BANG_ = function friends_quotes$core$fetch_link_BANG_(
  state
) {
  return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(
    'https://friends-quotes-api.herokuapp.com/quotes/random',
    cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(
      [
        new cljs.core.PersistentArrayMap(
          null,
          2,
          [
            new cljs.core.Keyword(null, 'handler', 'handler', -195596612),
            function (data) {
              cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(
                state,
                cljs.core.assoc,
                new cljs.core.Keyword(null, 'author', 'author', 2111686192),
                cljs.core.get.cljs$core$IFn$_invoke$arity$2(data, 'character')
              );

              return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(
                state,
                cljs.core.assoc,
                new cljs.core.Keyword(null, 'text', 'text', -1790561697),
                cljs.core.get.cljs$core$IFn$_invoke$arity$2(data, 'quote')
              );
            },
            new cljs.core.Keyword(
              null,
              'error-handler',
              'error-handler',
              -484945776
            ),
            function (p__44129) {
              var map__44130 = p__44129;
              var map__44130__$1 = (
                !(map__44130 == null)
                  ? map__44130.cljs$lang$protocol_mask$partition0$ & 64 ||
                    cljs.core.PROTOCOL_SENTINEL === map__44130.cljs$core$ISeq$
                    ? true
                    : false
                  : false
              )
                ? cljs.core.apply.cljs$core$IFn$_invoke$arity$2(
                    cljs.core.hash_map,
                    map__44130
                  )
                : map__44130;
              var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(
                map__44130__$1,
                new cljs.core.Keyword(null, 'status', 'status', -1997798413)
              );
              var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(
                map__44130__$1,
                new cljs.core.Keyword(
                  null,
                  'status-text',
                  'status-text',
                  -1834235478
                )
              );
              return console.log(status, status_text);
            },
          ],
          null
        ),
      ],
      0
    )
  );
};
friends_quotes.core.tweet_link = function friends_quotes$core$tweet_link(
  state
) {
  return [
    'https://twitter.com/intent/tweet?hashtags=friendsquote&text=',
    cljs.core.str.cljs$core$IFn$_invoke$arity$1(
      new cljs.core.Keyword(
        null,
        'text',
        'text',
        -1790561697
      ).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))
    ),
    ' - ',
    cljs.core.str.cljs$core$IFn$_invoke$arity$1(
      new cljs.core.Keyword(
        null,
        'author',
        'author',
        2111686192
      ).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))
    ),
  ].join('');
};
friends_quotes.core.quote = function friends_quotes$core$quote(state) {
  return new cljs.core.PersistentVector(
    null,
    2,
    5,
    cljs.core.PersistentVector.EMPTY_NODE,
    [
      new cljs.core.Keyword(null, 'div', 'div', 1057191632),
      new cljs.core.PersistentVector(
        null,
        2,
        5,
        cljs.core.PersistentVector.EMPTY_NODE,
        [
          new cljs.core.Keyword(null, 'div.frame', 'div.frame', 908047456),
          new cljs.core.PersistentVector(
            null,
            4,
            5,
            cljs.core.PersistentVector.EMPTY_NODE,
            [
              new cljs.core.Keyword(
                null,
                'div.quote-container',
                'div.quote-container',
                -996943952
              ),
              new cljs.core.PersistentVector(
                null,
                2,
                5,
                cljs.core.PersistentVector.EMPTY_NODE,
                [
                  new cljs.core.Keyword(
                    null,
                    'p.quote-text',
                    'p.quote-text',
                    223016122
                  ),
                  new cljs.core.Keyword(
                    null,
                    'text',
                    'text',
                    -1790561697
                  ).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),
                ],
                null
              ),
              new cljs.core.PersistentVector(
                null,
                3,
                5,
                cljs.core.PersistentVector.EMPTY_NODE,
                [
                  new cljs.core.Keyword(
                    null,
                    'p.quote-author',
                    'p.quote-author',
                    761632699
                  ),
                  '- ',
                  new cljs.core.Keyword(
                    null,
                    'author',
                    'author',
                    2111686192
                  ).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),
                ],
                null
              ),
              new cljs.core.PersistentVector(
                null,
                3,
                5,
                cljs.core.PersistentVector.EMPTY_NODE,
                [
                  new cljs.core.Keyword(
                    null,
                    'div.action-buttons',
                    'div.action-buttons',
                    209691206
                  ),
                  new cljs.core.PersistentVector(
                    null,
                    3,
                    5,
                    cljs.core.PersistentVector.EMPTY_NODE,
                    [
                      new cljs.core.Keyword(null, 'a', 'a', -2123407586),
                      new cljs.core.PersistentArrayMap(
                        null,
                        2,
                        [
                          new cljs.core.Keyword(
                            null,
                            'href',
                            'href',
                            -793805698
                          ),
                          friends_quotes.core.tweet_link(state),
                          new cljs.core.Keyword(
                            null,
                            'target',
                            'target',
                            253001721
                          ),
                          '_blank',
                        ],
                        null
                      ),
                      'Tweet!',
                    ],
                    null
                  ),
                  new cljs.core.PersistentVector(
                    null,
                    3,
                    5,
                    cljs.core.PersistentVector.EMPTY_NODE,
                    [
                      new cljs.core.Keyword(
                        null,
                        'button',
                        'button',
                        1456579943
                      ),
                      new cljs.core.PersistentArrayMap(
                        null,
                        1,
                        [
                          new cljs.core.Keyword(
                            null,
                            'on-click',
                            'on-click',
                            1632826543
                          ),
                          function () {
                            return friends_quotes.core.fetch_link_BANG_(state);
                          },
                        ],
                        null
                      ),
                      'Next Quote',
                    ],
                    null
                  ),
                ],
                null
              ),
            ],
            null
          ),
        ],
        null
      ),
    ],
    null
  );
};
friends_quotes.core.start = function friends_quotes$core$start() {
  var G__44132 = new cljs.core.PersistentVector(
    null,
    2,
    5,
    cljs.core.PersistentVector.EMPTY_NODE,
    [friends_quotes.core.quote, friends_quotes.core.app_state],
    null
  );
  var G__44133 = document.getElementById('app');
  return reagent.core.render_component.cljs$core$IFn$_invoke$arity$2
    ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(
        G__44132,
        G__44133
      )
    : reagent.core.render_component.call(null, G__44132, G__44133);
};
friends_quotes.core.init = function friends_quotes$core$init() {
  return friends_quotes.core.start();
};
goog.exportSymbol('friends_quotes.core.init', friends_quotes.core.init);
friends_quotes.core.stop = function friends_quotes$core$stop() {
  return console.log('stop');
};
friends_quotes.core.fetch_link_BANG_(friends_quotes.core.app_state);

//# sourceMappingURL=friends_quotes.core.js.map

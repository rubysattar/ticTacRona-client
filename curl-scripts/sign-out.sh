curl "https://tic-tac-toe-wdi.herokuapp.com/sign-out" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}"
echo

# 02 - The Account Kit - Instantiation

The goal of this second round is to try and create a code sample that illustrates how a developer should instantiate an `Account` object with the new Web Client SDKs. 

The developer will need to:

- Setup an `Account` class to represent the data required to load an account.
- Provide a method to easily retrieve/refresh the data for that account.
- Store that account data within the `Account` object as an abstract representation that makes more sense than the API response.
- Provide methods to more easily work with the data and/or retrieve array data by a specific value (permissions)
- Limit this data to that found within the `get_account` response to start with. Future additions may add additional API calls.


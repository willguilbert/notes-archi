# Tell Dont Ask

**Tell Dont Ask is all about keeping the data where it belongs - encapsulated in the object. Encapsulation should prevent us from modifying object internal state without it knowing that. Modifying the object state with setter does not guarantee that, as such the object lacks abstraction.**

When we applied to Tell Don’t Ask principle, the service simply delegates the request to it. Its only responsibility is to orchestrate invocation and manage the repositories. Testing it will only limit to the integration with repositories, while logic that used to be in it can be checked easily with unit tests.

The Tell Don’t Ask principle promotes keeping logic inside objects instead of services. This increases their cohesion, making the code more maintainable and easier to test. Extracting the logic into service makes them unnecessarily big and complex. Try to speak with your objects, and tell them what to do.

*source: https://medium.com/vattenfall-tech/tell-dont-ask-learn-to-talk-to-your-objects-45d7c4aa61fe*
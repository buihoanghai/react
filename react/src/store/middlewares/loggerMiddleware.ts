const loggerMiddleware = (store: { getState: any }) => (next: any) => (action: any) => {
	console.log("Dispatching:", action);

	const result = next(action); // Forward action to the next middleware or reducer

	console.log("Next State:", store.getState());

	return result; // Return the result of dispatching the action
};

export default loggerMiddleware;

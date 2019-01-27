export default function useCustomerLogin() {
    return ({
        username,
        password,
    }: {
        username: string;
        password: string;
    }): Promise<{ success: true }> =>
        fetch(
            `/m2fc/customer/loginPost?username=${username}&password=${password}`
        )
            .then(resp => resp.json())
            .then(resp => {
                if (!resp.success) {
                    throw new Error(resp.message);
                } else {
                    return resp;
                }
            });
}

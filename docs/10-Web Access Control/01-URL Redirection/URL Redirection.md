# Redirect One Website to Another Website

## [Access the SafeSquid User Interface ](https://help.safesquid.com/portal/en/kb/articles/access-the-safesquid-user-interface)

SafeSquid comes with sample policy, helping you in policy creation.

In SafeSquid sample policies " Enable interface access through authentication " policy is already present. You have to just enable those policies, so that it becomes applicable.

Click on 'Configure' which is at top right of the SafeSquid Interface.

On the left side bar of SafeSquid Interface click on** Real Time Content Security   >> Redirect**

Make the Global Section Enabled to TRUE.

![Global Section Enabled to TRUE to access the SafeSquid User Interface ](/img/How_To/Redirect_One_Website_To_Another_Website/image1.webp)

Then click on Redirection Policies, here you across with some default policies. Add new policy.

![Default policies in Redirection Policies section](/img/How_To/Redirect_One_Website_To_Another_Website/image2.webp)

Create a policy as shown:

![Policy to Redirect One Website To Another Website](/img/How_To/Redirect_One_Website_To_Another_Website/image3.webp)

Click on save (Save button is placed at right bottom)

## Testing:

In this the URL value 'rediff.com' is redirect to 'SafeSquid.com' and the port to redirect to 80.

Go to browser and access https://www.rediff.com/, it must redirect to SafeSquid.com, we can verify in Native logs on SafeSquid interface Reports >> Native logs as like below.

![Verify Redirect One Website To Another Website in Native logs on](/img/How_To/Redirect_One_Website_To_Another_Website/image4.webp)

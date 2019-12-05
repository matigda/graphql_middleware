const { gql } = require('apollo-server');

const typeDefs = gql`

schema {
  query: QueryRoot
  mutation: Mutation
}

"""
Marks an element of a GraphQL schema as having restricted access.
"""
directive @accessRestricted(
  """
  Explains the reason around this restriction
  """
  reason: String = null
) on FIELD_DEFINITION

#"""
#A version of the API.
#"""
#type ApiVersion {
#  """
#  The human-readable name of the version.
#  """
#  displayName: String!
#
#  """
#  The unique identifier of an ApiVersion. All supported API versions have a date-based (YYYY-MM) or \`unstable\` handle.
#  """
#  handle: String!
#
#  """
#  Whether the version is supported by Shopify.
#  """
#  supported: Boolean!
#}

"""
Details about the gift card used on the checkout.
"""
type AppliedGiftCard implements Node {
  """
  The amount that was taken from the Gift Card by applying it.
  """
  amountUsedV2: MoneyV2!

  """
  The amount left on the Gift Card.
  """
  balanceV2: MoneyV2!

  """
  Globally unique identifier.
  """
  id: ID!

  """
  The last characters of the Gift Card code
  """
  lastCharacters: String!

  """
  The amount that was applied to the checkout in its currency.
  """
  presentmentAmountUsed: MoneyV2!
}
#
#type Article implements Node {
#  """
#  The article's author.
#  """
#  author: ArticleAuthor! @deprecated(reason: "Use \`authorV2\` instead")
#
#  """
#  The article's author.
#  """
#  authorV2: ArticleAuthor
#
#  """
#  The blog that the article belongs to.
#  """
#  blog: Blog!
#
#  """
#  List of comments posted on the article.
#  """
#  comments(
#    """
#    Returns up to the first \`n\` elements from the list.
#    """
#    first: Int
#
#    """
#    Returns the elements that come after the specified cursor.
#    """
#    after: String
#
#    """
#    Returns up to the last \`n\` elements from the list.
#    """
#    last: Int
#
#    """
#    Returns the elements that come before the specified cursor.
#    """
#    before: String
#
#    """
#    Reverse the order of the underlying list.
#    """
#    reverse: Boolean = false
#  ): CommentConnection!
#
#  """
#  Stripped content of the article, single line with HTML tags removed.
#  """
#  content(
#    """
#    Truncates string after the given length.
#    """
#    truncateAt: Int
#  ): String!
#
#  """
#  The content of the article, complete with HTML formatting.
#  """
#  contentHtml: HTML!
#
#  """
#  Stripped excerpt of the article, single line with HTML tags removed.
#  """
#  excerpt(
#    """
#    Truncates string after the given length.
#    """
#    truncateAt: Int
#  ): String
#
#  """
#  The excerpt of the article, complete with HTML formatting.
#  """
#  excerptHtml: HTML
#
#  """
#  A human-friendly unique string for the Article automatically generated from its title.
#  """
#  handle: String!
#
#  """
#  Globally unique identifier.
#  """
#  id: ID!
#
#  """
#  The image associated with the article.
#  """
#  image(
#    """
#    Image width in pixels between 1 and 2048. This argument is deprecated: Use \`maxWidth\` on \`Image.transformedSrc\` instead.
#    """
#    maxWidth: Int
#
#    """
#    Image height in pixels between 1 and 2048. This argument is deprecated: Use
#    \`maxHeight\` on \`Image.transformedSrc\` instead.
#    """
#    maxHeight: Int
#
#    """
#    Crops the image according to the specified region. This argument is
#    deprecated: Use \`crop\` on \`Image.transformedSrc\` instead.
#    """
#    crop: CropRegion
#
#    """
#    Image size multiplier for high-resolution retina displays. Must be between 1
#    and 3. This argument is deprecated: Use \`scale\` on \`Image.transformedSrc\` instead.
#    """
#    scale: Int = 1
#  ): Image
#
#  """
#  The date and time when the article was published.
#  """
#  publishedAt: DateTime!
#
#  """
#  The article’s SEO information.
#  """
#  seo: SEO
#
#  """
#  A categorization that a article can be tagged with.
#  """
#  tags: [String!]!
#
#  """
#  The article’s name.
#  """
#  title: String!
#
#  """
#  The url pointing to the article accessible from the web.
#  """
#  url: URL!
#}
#
#type ArticleAuthor {
#  """
#  The author's bio.
#  """
#  bio: String
#
#  """
#  The author’s email.
#  """
#  email: String!
#
#  """
#  The author's first name.
#  """
#  firstName: String!
#
#  """
#  The author's last name.
#  """
#  lastName: String!
#
#  """
#  The author's full name.
#  """
#  name: String!
#}
#
#type ArticleConnection {
#  """
#  A list of edges.
#  """
#  edges: [ArticleEdge!]!
#
#  """
#  Information to aid in pagination.
#  """
#  pageInfo: PageInfo!
#}
#
#type ArticleEdge {
#  """
#  A cursor for use in pagination.
#  """
#  cursor: String!
#
#  """
#  The item at the end of ArticleEdge.
#  """
#  node: Article!
#}
#
#"""
#The set of valid sort keys for the articles query.
#"""
#enum ArticleSortKeys {
#  """
#  Sort by the \`title\` value.
#  """
#  TITLE
#
#  """
#  Sort by the \`blog_title\` value.
#  """
#  BLOG_TITLE
#
#  """
#  Sort by the \`author\` value.
#  """
#  AUTHOR
#
#  """
#  Sort by the \`updated_at\` value.
#  """
#  UPDATED_AT
#
#  """
#  Sort by the \`published_at\` value.
#  """
#  PUBLISHED_AT
#
#  """
#  Sort by the \`id\` value.
#  """
#  ID
#
#  """
#  During a search (i.e. when the \`query\` parameter has been specified on the connection) this sorts the
#  results by relevance to the search term(s). When no search query is specified, this sort key is not
#  deterministic and should not be used.
#  """
#  RELEVANCE
#}

"""
Represents a generic custom attribute.
"""
type Attribute {
  """
  Key or name of the attribute.
  """
  key: String!

  """
  Value of the attribute.
  """
  value: String
}

"""
Specifies the input fields required for an attribute.
"""
input AttributeInput {
  """
  Key or name of the attribute.
  """
  key: String!

  """
  Value of the attribute.
  """
  value: String!
}

#"""
#Automatic discount applications capture the intentions of a discount that was automatically applied.
#"""
#type AutomaticDiscountApplication implements DiscountApplication {
#  """
#  The method by which the discount's value is allocated to its entitled items.
#  """
#  allocationMethod: DiscountApplicationAllocationMethod!
#
#  """
#  Which lines of targetType that the discount is allocated over.
#  """
#  targetSelection: DiscountApplicationTargetSelection!
#
#  """
#  The type of line that the discount is applicable towards.
#  """
#  targetType: DiscountApplicationTargetType!
#
#  """
#  The title of the application.
#  """
#  title: String!
#
#  """
#  The value of the discount application.
#  """
#  value: PricingValue!
#}

"""
A collection of available shipping rates for a checkout.
"""
type AvailableShippingRates {
  """
  Whether or not the shipping rates are ready.
  The \`shippingRates\` field is \`null\` when this value is \`false\`.
  This field should be polled until its value becomes \`true\`.
  """
  ready: Boolean!

  """
  The fetched shipping rates. \`null\` until the \`ready\` field is \`true\`.
  """
  shippingRates: [ShippingRate!]
}

#type Blog implements Node {
#  """
#  Find an article by its handle.
#  """
#  articleByHandle(
#    """
#    The handle of the article.
#    """
#    handle: String!
#  ): Article
#
#  """
#  List of the blog's articles.
#  """
#  articles(
#    """
#    Returns up to the first \`n\` elements from the list.
#    """
#    first: Int
#
#    """
#    Returns the elements that come after the specified cursor.
#    """
#    after: String
#
#    """
#    Returns up to the last \`n\` elements from the list.
#    """
#    last: Int
#
#    """
#    Returns the elements that come before the specified cursor.
#    """
#    before: String
#
#    """
#    Reverse the order of the underlying list.
#    """
#    reverse: Boolean = false
#
#    """
#    Sort the underlying list by the given key.
#    """
#    sortKey: ArticleSortKeys = ID
#
#    """
#    Supported filter parameters:
#     - \`author\`
#     - \`blog_title\`
#     - \`created_at\`
#     - \`tag\`
#     - \`updated_at\`
#
#    See the detailed [search syntax](https://help.shopify.com/api/getting-started/search-syntax).
#    """
#    query: String
#  ): ArticleConnection!
#
#  """
#  The authors who have contributed to the blog.
#  """
#  authors: [ArticleAuthor!]!
#
#  """
#  A human-friendly unique string for the Blog automatically generated from its title.
#  """
#  handle: String!
#
#  """
#  Globally unique identifier.
#  """
#  id: ID!
#
#  """
#  The blogs’s title.
#  """
#  title: String!
#
#  """
#  The url pointing to the blog accessible from the web.
#  """
#  url: URL!
#}
#
#type BlogConnection {
#  """
#  A list of edges.
#  """
#  edges: [BlogEdge!]!
#
#  """
#  Information to aid in pagination.
#  """
#  pageInfo: PageInfo!
#}
#
#type BlogEdge {
#  """
#  A cursor for use in pagination.
#  """
#  cursor: String!
#
#  """
#  The item at the end of BlogEdge.
#  """
#  node: Blog!
#}
#
#"""
#The set of valid sort keys for the blogs query.
#"""
#enum BlogSortKeys {
#  """
#  Sort by the \`handle\` value.
#  """
#  HANDLE
#
#  """
#  Sort by the \`title\` value.
#  """
#  TITLE
#
#  """
#  Sort by the \`id\` value.
#  """
#  ID
#
#  """
#  During a search (i.e. when the \`query\` parameter has been specified on the connection) this sorts the
#  results by relevance to the search term(s). When no search query is specified, this sort key is not
#  deterministic and should not be used.
#  """
#  RELEVANCE
#}

"""
Card brand, such as Visa or Mastercard, which can be used for payments.
"""
enum CardBrand {
  """
  Visa
  """
  VISA

  """
  Mastercard
  """
  MASTERCARD

  """
  Discover
  """
  DISCOVER

  """
  American Express
  """
  AMERICAN_EXPRESS

  """
  Diners Club
  """
  DINERS_CLUB

  """
  JCB
  """
  JCB
}

"""
A container for all the information required to checkout items and pay.
"""
type Checkout implements Node {
  appliedGiftCards: [AppliedGiftCard!]!

  """
  The available shipping rates for this Checkout.
  Should only be used when checkout \`requiresShipping\` is \`true\` and
  the shipping address is valid.
  """
  availableShippingRates: AvailableShippingRates

  """
  The date and time when the checkout was completed.
  """
  completedAt: DateTime

  """
  The date and time when the checkout was created.
  """
  createdAt: DateTime!

  """
  The currency code for the Checkout.
  """
  currencyCode: CurrencyCode!

  #  """
  #  A list of extra information that is added to the checkout.
  #  """
  #  customAttributes: [Attribute!]!

  #  """
  #  The customer associated with the checkout.
  #  """
  #  customer: Customer
  #    @deprecated(
  #      reason: "This field will always return null. If you have an authentication token for the customer, you can use the \`customer\` field on the query root to retrieve it."
  #    )

  """
  Discounts that have been applied on the checkout.
  """
  discountApplications(
    """
    Page used in pagination
    """
    pageNumber: Int
    
    """
    Amount of items on a single page.
    """
    itemsPerPage: Int
    
    """
    Returns up to the first \`n\` elements from the list.
    """
    first: Int

    """
    Returns the elements that come after the specified cursor.
    """
    after: String

    """
    Returns up to the last \`n\` elements from the list.
    """
    last: Int

    """
    Returns the elements that come before the specified cursor.
    """
    before: String

    """
    Reverse the order of the underlying list.
    """
    reverse: Boolean = false
  ): DiscountApplicationConnection!

  """
  The email attached to this checkout.
  """
  email: String

  """
  Globally unique identifier.
  """
  id: ID!

  """
  A list of line item objects, each one containing information about an item in the checkout.
  """
  lineItems(
    """
    Page used in pagination
    """
    pageNumber: Int
    
    """
    Amount of items on a single page.
    """
    itemsPerPage: Int
    
    """
    Returns up to the first \`n\` elements from the list.
    """
    first: Int

    """
    Returns the elements that come after the specified cursor.
    """
    after: String

    """
    Returns up to the last \`n\` elements from the list.
    """
    last: Int

    """
    Returns the elements that come before the specified cursor.
    """
    before: String

    """
    Reverse the order of the underlying list.
    """
    reverse: Boolean = false
  ): CheckoutLineItemConnection!

  """
  The sum of all the prices of all the items in the checkout. Taxes, shipping and discounts excluded.
  """
  lineItemsSubtotalPrice: Money!

  note: String

  """
  The resulting order from a paid checkout.
  """
  order: Order

  """
  The Order Status Page for this Checkout, null when checkout is not completed.
  """
  orderStatusUrl: URL

  #  """
  #  The amount left to be paid. This is equal to the cost of the line items, taxes
  #  and shipping minus discounts and gift cards.
  #  """
  #  paymentDue: Money! @deprecated(reason: "Use \`paymentDueV2\` instead")

  """
  The amount left to be paid. This is equal to the cost of the line items, taxes
  and shipping minus discounts and gift cards.
  """
  paymentDue: Money!

  """
  Whether or not the Checkout is ready and can be completed. Checkouts may have
  asynchronous operations that can take time to finish. If you want to complete
  a checkout or ensure all the fields are populated and up to date, polling is
  required until the value is true.
  """
  ready: Boolean!

  """
  States whether or not the fulfillment requires shipping.
  """
  requiresShipping: Boolean!

  """
  The shipping address to where the line items will be shipped.
  """
  shippingAddress: MailingAddress

  """
  The discounts that have been allocated onto the shipping line by discount applications.
  """
  shippingDiscountAllocations: [DiscountAllocation!]!

  """
  Once a shipping rate is selected by the customer it is transitioned to a \`shipping_line\` object.
  """
  shippingLine: ShippingRate

  #  """
  #  Price of the checkout before shipping and taxes.
  #  """
  #  subtotalPrice: Money! @deprecated(reason: "Use \`subtotalPriceV2\` instead")

  """
  Price of the checkout before shipping and taxes.
  """
  subtotalPrice: Money!

  """
  Specifies if the Checkout is tax exempt.
  """
  taxExempt: Boolean!

  """
  Specifies if taxes are included in the line item and shipping line prices.
  """
  taxesIncluded: Boolean!

  #  """
  #  The sum of all the prices of all the items in the checkout, taxes and discounts included.
  #  """
  #  totalPrice: Money! @deprecated(reason: "Use \`totalPriceV2\` instead")

  """
  The sum of all the prices of all the items in the checkout, taxes and discounts included.
  """
  totalPrice: Money!

  #  """
  #  The sum of all the taxes applied to the line items and shipping lines in the checkout.
  #  """
  #  totalTax: Money! @deprecated(reason: "Use \`totalTaxV2\` instead")

  """
  The sum of all the taxes applied to the line items and shipping lines in the checkout.
  """
  totalTax: Money!

  """
  The date and time when the checkout was last updated.
  """
  updatedAt: DateTime!

  """
  The url pointing to the checkout accessible from the web.
  """
  webUrl: URL!
}

"""
Specifies the fields required to update a checkout's attributes.
"""
input CheckoutAttributesUpdateInput {
  """
  The text of an optional note that a shop owner can attach to the checkout.
  """
  note: String

  """
  A list of extra information that is added to the checkout.
  """
  customAttributes: [AttributeInput!]

  """
  Allows setting partial addresses on a Checkout, skipping the full validation of attributes.
  The required attributes are city, province, and country.
  Full validation of the addresses is still done at complete time.
  """
  allowPartialAddresses: Boolean = false
}

"""
Return type for \`checkoutAttributesUpdate\` mutation.
"""
type CheckoutAttributesUpdatePayload {
  """
  The updated checkout object.
  """
  checkout: Checkout!

  """
  List of errors that occurred executing the mutation.
  """
  checkoutUserErrors: [CheckoutUserError!]!

  """
  List of errors that occurred executing the mutation.
  """
  userErrors: [UserError!]!
    @deprecated(reason: "Use \`checkoutUserErrors\` instead")
}

"""
Specifies the fields required to update a checkout's attributes.
"""
input CheckoutAttributesUpdateV2Input {
  """
  The text of an optional note that a shop owner can attach to the checkout.
  """
  note: String

  """
  A list of extra information that is added to the checkout.
  """
  customAttributes: [AttributeInput!]

  """
  Allows setting partial addresses on a Checkout, skipping the full validation of attributes.
  The required attributes are city, province, and country.
  Full validation of the addresses is still done at complete time.
  """
  allowPartialAddresses: Boolean = false
}

"""
Return type for \`checkoutAttributesUpdateV2\` mutation.
"""
type CheckoutAttributesUpdateV2Payload {
  """
  The updated checkout object.
  """
  checkout: Checkout

  """
  List of errors that occurred executing the mutation.
  """
  checkoutUserErrors: [CheckoutUserError!]!

  """
  List of errors that occurred executing the mutation.
  """
  userErrors: [UserError!]!
    @deprecated(reason: "Use \`checkoutUserErrors\` instead")
}

"""
Return type for \`checkoutCompleteFree\` mutation.
"""
type CheckoutCompleteFreePayload {
  """
  The updated checkout object.
  """
  checkout: Checkout

  """
  List of errors that occurred executing the mutation.
  """
  checkoutUserErrors: [CheckoutUserError!]!

  """
  List of errors that occurred executing the mutation.
  """
  userErrors: [UserError!]!
    @deprecated(reason: "Use \`checkoutUserErrors\` instead")
}

"""
Return type for \`checkoutCompleteWithCreditCard\` mutation.
"""
type CheckoutCompleteWithCreditCardPayload {
  """
  The checkout on which the payment was applied.
  """
  checkout: Checkout!

  """
  List of errors that occurred executing the mutation.
  """
  checkoutUserErrors: [CheckoutUserError!]!

  """
  A representation of the attempted payment.
  """
  payment: Payment

  """
  List of errors that occurred executing the mutation.
  """
  userErrors: [UserError!]!
    @deprecated(reason: "Use \`checkoutUserErrors\` instead")
}

"""
Return type for \`checkoutCompleteWithCreditCardV2\` mutation.
"""
type CheckoutCompleteWithCreditCardV2Payload {
  """
  The checkout on which the payment was applied.
  """
  checkout: Checkout

  """
  List of errors that occurred executing the mutation.
  """
  checkoutUserErrors: [CheckoutUserError!]!

  """
  A representation of the attempted payment.
  """
  payment: Payment

  """
  List of errors that occurred executing the mutation.
  """
  userErrors: [UserError!]!
    @deprecated(reason: "Use \`checkoutUserErrors\` instead")
}

"""
Return type for \`checkoutCompleteWithTokenizedPayment\` mutation.
"""
type CheckoutCompleteWithTokenizedPaymentPayload {
  """
  The checkout on which the payment was applied.
  """
  checkout: Checkout!

  """
  List of errors that occurred executing the mutation.
  """
  checkoutUserErrors: [CheckoutUserError!]!

  """
  A representation of the attempted payment.
  """
  payment: Payment

  """
  List of errors that occurred executing the mutation.
  """
  userErrors: [UserError!]!
    @deprecated(reason: "Use \`checkoutUserErrors\` instead")
}

"""
Return type for \`checkoutCompleteWithTokenizedPaymentV2\` mutation.
"""
type CheckoutCompleteWithTokenizedPaymentV2Payload {
  """
  The checkout on which the payment was applied.
  """
  checkout: Checkout

  """
  List of errors that occurred executing the mutation.
  """
  checkoutUserErrors: [CheckoutUserError!]!

  """
  A representation of the attempted payment.
  """
  payment: Payment

  """
  List of errors that occurred executing the mutation.
  """
  userErrors: [UserError!]!
    @deprecated(reason: "Use \`checkoutUserErrors\` instead")
}

"""
Specifies the fields required to create a checkout.
"""
input CheckoutCreateInput {
  """
  The email with which the customer wants to checkout.
  """
  email: String

  """
  A list of line item objects, each one containing information about an item in the checkout.
  """
  lineItems: [CheckoutLineItemInput!]

  """
  The shipping address to where the line items will be shipped.
  """
  shippingAddress: MailingAddressInput

  """
  The text of an optional note that a shop owner can attach to the checkout.
  """
  note: String

  """
  A list of extra information that is added to the checkout.
  """
  customAttributes: [AttributeInput!]

  """
  Allows setting partial addresses on a Checkout, skipping the full validation of attributes.
  The required attributes are city, province, and country.
  Full validation of addresses is still done at complete time.
  """
  allowPartialAddresses: Boolean

  """
  The three-letter currency code of one of the shop's enabled presentment currencies.
  Including this field creates a checkout in the specified currency. By default, new
  checkouts are created in the shop's primary currency.
  """
  presentmentCurrencyCode: CurrencyCode
}

"""
Return type for \`checkoutCreate\` mutation.
"""
type CheckoutCreatePayload {
  """
  The new checkout object.
  """
  checkout: Checkout

  """
  List of errors that occurred executing the mutation.
  """
  checkoutUserErrors: [CheckoutUserError!]!

  """
  List of errors that occurred executing the mutation.
  """
  userErrors: [UserError!]!
    @deprecated(reason: "Use \`checkoutUserErrors\` instead")
}

"""
Return type for \`checkoutCustomerAssociate\` mutation.
"""
type CheckoutCustomerAssociatePayload {
  """
  The updated checkout object.
  """
  checkout: Checkout!

  """
  The associated customer object.
  """
  customer: Customer

  """
  List of errors that occurred executing the mutation.
  """
  userErrors: [UserError!]!
}

"""
Return type for \`checkoutCustomerAssociateV2\` mutation.
"""
type CheckoutCustomerAssociateV2Payload {
  """
  The updated checkout object.
  """
  checkout: Checkout

  """
  List of errors that occurred executing the mutation.
  """
  checkoutUserErrors: [CheckoutUserError!]!

  """
  The associated customer object.
  """
  customer: Customer

  """
  List of errors that occurred executing the mutation.
  """
  userErrors: [UserError!]!
    @deprecated(reason: "Use \`checkoutUserErrors\` instead")
}

"""
Return type for \`checkoutCustomerDisassociate\` mutation.
"""
type CheckoutCustomerDisassociatePayload {
  """
  The updated checkout object.
  """
  checkout: Checkout!

  """
  List of errors that occurred executing the mutation.
  """
  checkoutUserErrors: [CheckoutUserError!]!

  """
  List of errors that occurred executing the mutation.
  """
  userErrors: [UserError!]!
    @deprecated(reason: "Use \`checkoutUserErrors\` instead")
}

"""
Return type for \`checkoutCustomerDisassociateV2\` mutation.
"""
type CheckoutCustomerDisassociateV2Payload {
  """
  The updated checkout object.
  """
  checkout: Checkout

  """
  List of errors that occurred executing the mutation.
  """
  checkoutUserErrors: [CheckoutUserError!]!

  """
  List of errors that occurred executing the mutation.
  """
  userErrors: [UserError!]!
    @deprecated(reason: "Use \`checkoutUserErrors\` instead")
}

"""
Return type for \`checkoutDiscountCodeApply\` mutation.
"""
type CheckoutDiscountCodeApplyPayload {
  """
  The updated checkout object.
  """
  checkout: Checkout!

  """
  List of errors that occurred executing the mutation.
  """
  checkoutUserErrors: [CheckoutUserError!]!

  """
  List of errors that occurred executing the mutation.
  """
  userErrors: [UserError!]!
    @deprecated(reason: "Use \`checkoutUserErrors\` instead")
}

"""
Return type for \`checkoutDiscountCodeApplyV2\` mutation.
"""
type CheckoutDiscountCodeApplyV2Payload {
  """
  The updated checkout object.
  """
  checkout: Checkout

  """
  List of errors that occurred executing the mutation.
  """
  checkoutUserErrors: [CheckoutUserError!]!

  """
  List of errors that occurred executing the mutation.
  """
  userErrors: [UserError!]!
    @deprecated(reason: "Use \`checkoutUserErrors\` instead")
}

"""
Return type for \`checkoutDiscountCodeRemove\` mutation.
"""
type CheckoutDiscountCodeRemovePayload {
  """
  The updated checkout object.
  """
  checkout: Checkout

  """
  List of errors that occurred executing the mutation.
  """
  checkoutUserErrors: [CheckoutUserError!]!

  """
  List of errors that occurred executing the mutation.
  """
  userErrors: [UserError!]!
    @deprecated(reason: "Use \`checkoutUserErrors\` instead")
}

"""
Return type for \`checkoutEmailUpdate\` mutation.
"""
type CheckoutEmailUpdatePayload {
  """
  The checkout object with the updated email.
  """
  checkout: Checkout!

  """
  List of errors that occurred executing the mutation.
  """
  checkoutUserErrors: [CheckoutUserError!]!

  """
  List of errors that occurred executing the mutation.
  """
  userErrors: [UserError!]!
    @deprecated(reason: "Use \`checkoutUserErrors\` instead")
}

"""
Return type for \`checkoutEmailUpdateV2\` mutation.
"""
type CheckoutEmailUpdateV2Payload {
  """
  The checkout object with the updated email.
  """
  checkout: Checkout

  """
  List of errors that occurred executing the mutation.
  """
  checkoutUserErrors: [CheckoutUserError!]!

  """
  List of errors that occurred executing the mutation.
  """
  userErrors: [UserError!]!
    @deprecated(reason: "Use \`checkoutUserErrors\` instead")
}

"""
Possible error codes that could be returned by a checkout mutation.
"""
enum CheckoutErrorCode {
  """
  Input value is blank.
  """
  BLANK

  """
  Input value is invalid.
  """
  INVALID

  """
  Input value is too long.
  """
  TOO_LONG

  """
  Input value is not present.
  """
  PRESENT

  """
  Input value should be less than maximum allowed value.
  """
  LESS_THAN

  """
  Input value should be greater than or equal to minimum allowed value.
  """
  GREATER_THAN_OR_EQUAL_TO

  """
  Input value should be less or equal to maximum allowed value.
  """
  LESS_THAN_OR_EQUAL_TO

  """
  Checkout is already completed.
  """
  ALREADY_COMPLETED

  """
  Checkout is locked.
  """
  LOCKED

  """
  Input value is not supported.
  """
  NOT_SUPPORTED

  """
  Input email contains an invalid domain name.
  """
  BAD_DOMAIN

  """
  Input Zip is invalid for country provided.
  """
  INVALID_FOR_COUNTRY

  """
  Input Zip is invalid for country and province provided.
  """
  INVALID_FOR_COUNTRY_AND_PROVINCE

  """
  Invalid state in country.
  """
  INVALID_STATE_IN_COUNTRY

  """
  Invalid province in country.
  """
  INVALID_PROVINCE_IN_COUNTRY

  """
  Invalid region in country.
  """
  INVALID_REGION_IN_COUNTRY

  """
  Shipping rate expired.
  """
  SHIPPING_RATE_EXPIRED

  """
  Gift card cannot be applied to a checkout that contains a gift card.
  """
  GIFT_CARD_UNUSABLE

  """
  Gift card is disabled.
  """
  GIFT_CARD_DISABLED

  """
  Gift card code is invalid.
  """
  GIFT_CARD_CODE_INVALID

  """
  Gift card has already been applied.
  """
  GIFT_CARD_ALREADY_APPLIED

  """
  Gift card currency does not match checkout currency.
  """
  GIFT_CARD_CURRENCY_MISMATCH

  """
  Gift card is expired.
  """
  GIFT_CARD_EXPIRED

  """
  Gift card has no funds left.
  """
  GIFT_CARD_DEPLETED

  """
  Gift card was not found.
  """
  GIFT_CARD_NOT_FOUND

  """
  Cart does not meet discount requirements notice.
  """
  CART_DOES_NOT_MEET_DISCOUNT_REQUIREMENTS_NOTICE

  """
  Discount expired.
  """
  DISCOUNT_EXPIRED

  """
  Discount disabled.
  """
  DISCOUNT_DISABLED

  """
  Discount limit reached.
  """
  DISCOUNT_LIMIT_REACHED

  """
  Discount not found.
  """
  DISCOUNT_NOT_FOUND

  """
  Customer already used once per customer discount notice.
  """
  CUSTOMER_ALREADY_USED_ONCE_PER_CUSTOMER_DISCOUNT_NOTICE

  """
  Checkout is already completed.
  """
  EMPTY

  """
  Not enough in stock.
  """
  NOT_ENOUGH_IN_STOCK

  """
  Missing payment input.
  """
  MISSING_PAYMENT_INPUT

  """
  The amount of the payment does not match the value to be paid.
  """
  TOTAL_PRICE_MISMATCH

  """
  Line item was not found in checkout.
  """
  LINE_ITEM_NOT_FOUND
}

"""
Return type for \`checkoutGiftCardApply\` mutation.
"""
type CheckoutGiftCardApplyPayload {
  """
  The updated checkout object.
  """
  checkout: Checkout!

  """
  List of errors that occurred executing the mutation.
  """
  checkoutUserErrors: [CheckoutUserError!]!

  """
  List of errors that occurred executing the mutation.
  """
  userErrors: [UserError!]!
    @deprecated(reason: "Use \`checkoutUserErrors\` instead")
}

"""
Return type for \`checkoutGiftCardRemove\` mutation.
"""
type CheckoutGiftCardRemovePayload {
  """
  The updated checkout object.
  """
  checkout: Checkout!

  """
  List of errors that occurred executing the mutation.
  """
  checkoutUserErrors: [CheckoutUserError!]!

  """
  List of errors that occurred executing the mutation.
  """
  userErrors: [UserError!]!
    @deprecated(reason: "Use \`checkoutUserErrors\` instead")
}

"""
Return type for \`checkoutGiftCardRemoveV2\` mutation.
"""
type CheckoutGiftCardRemoveV2Payload {
  """
  The updated checkout object.
  """
  checkout: Checkout

  """
  List of errors that occurred executing the mutation.
  """
  checkoutUserErrors: [CheckoutUserError!]!

  """
  List of errors that occurred executing the mutation.
  """
  userErrors: [UserError!]!
    @deprecated(reason: "Use \`checkoutUserErrors\` instead")
}

"""
Return type for \`checkoutGiftCardsAppend\` mutation.
"""
type CheckoutGiftCardsAppendPayload {
  """
  The updated checkout object.
  """
  checkout: Checkout

  """
  List of errors that occurred executing the mutation.
  """
  checkoutUserErrors: [CheckoutUserError!]!

  """
  List of errors that occurred executing the mutation.
  """
  userErrors: [UserError!]!
    @deprecated(reason: "Use \`checkoutUserErrors\` instead")
}

"""
A single line item in the checkout, grouped by variant and attributes.
"""
type CheckoutLineItem implements Node {
  #  """
  #  Extra information in the form of an array of Key-Value pairs about the line item.
  #  """
  #  customAttributes: [Attribute!]!

  """
  The discounts that have been allocated onto the checkout line item by discount applications.
  """
  discountAllocations: [DiscountAllocation!]!

  """
  Globally unique identifier.
  """
  id: ID!

  """
  The quantity of the line item.
  """
  quantity: Int!

  """
  Title of the line item. Defaults to the product's title.
  """
  title: String!

  """
  Product variant of the line item.
  """
  variant: ProductVariant
}

type CheckoutLineItemConnection {
  """
  A list of edges.
  """
  edges: [CheckoutLineItemEdge!]!

  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
}

type CheckoutLineItemEdge {
  """
  A cursor for use in pagination.
  """
  cursor: String!

  """
  The item at the end of CheckoutLineItemEdge.
  """
  node: CheckoutLineItem!
}

"""
Specifies the input fields to create a line item on a checkout.
"""
input CheckoutLineItemInput {
  """
  Extra information in the form of an array of Key-Value pairs about the line item.
  """
  customAttributes: [AttributeInput!]

  """
  The quantity of the line item.
  """
  quantity: Int!

  """
  The identifier of the product variant for the line item.
  """
  variantId: ID!
}

"""
Return type for \`checkoutLineItemsAdd\` mutation.
"""
type CheckoutLineItemsAddPayload {
  """
  The updated checkout object.
  """
  checkout: Checkout

  """
  List of errors that occurred executing the mutation.
  """
  checkoutUserErrors: [CheckoutUserError!]!

  """
  List of errors that occurred executing the mutation.
  """
  userErrors: [UserError!]!
    @deprecated(reason: "Use \`checkoutUserErrors\` instead")
}

"""
Return type for \`checkoutLineItemsRemove\` mutation.
"""
type CheckoutLineItemsRemovePayload {
  checkout: Checkout

  """
  List of errors that occurred executing the mutation.
  """
  checkoutUserErrors: [CheckoutUserError!]!

  """
  List of errors that occurred executing the mutation.
  """
  userErrors: [UserError!]!
    @deprecated(reason: "Use \`checkoutUserErrors\` instead")
}

"""
Return type for \`checkoutLineItemsReplace\` mutation.
"""
type CheckoutLineItemsReplacePayload {
  """
  The updated checkout object.
  """
  checkout: Checkout

  """
  List of errors that occurred executing the mutation.
  """
  userErrors: [CheckoutUserError!]!
}

"""
Return type for \`checkoutLineItemsUpdate\` mutation.
"""
type CheckoutLineItemsUpdatePayload {
  """
  The updated checkout object.
  """
  checkout: Checkout

  """
  List of errors that occurred executing the mutation.
  """
  checkoutUserErrors: [CheckoutUserError!]!

  """
  List of errors that occurred executing the mutation.
  """
  userErrors: [UserError!]!
    @deprecated(reason: "Use \`checkoutUserErrors\` instead")
}

"""
Specifies the input fields to update a line item on the checkout.
"""
input CheckoutLineItemUpdateInput {
  id: ID

  """
  The variant identifier of the line item.
  """
  variantId: ID

  """
  The quantity of the line item.
  """
  quantity: Int

  """
  Extra information in the form of an array of Key-Value pairs about the line item.
  """
  customAttributes: [AttributeInput!]
}

"""
Return type for \`checkoutShippingAddressUpdate\` mutation.
"""
type CheckoutShippingAddressUpdatePayload {
  """
  The updated checkout object.
  """
  checkout: Checkout!

  """
  List of errors that occurred executing the mutation.
  """
  checkoutUserErrors: [CheckoutUserError!]!

  """
  List of errors that occurred executing the mutation.
  """
  userErrors: [UserError!]!
    @deprecated(reason: "Use \`checkoutUserErrors\` instead")
}

"""
Return type for \`checkoutShippingAddressUpdateV2\` mutation.
"""
type CheckoutShippingAddressUpdateV2Payload {
  """
  The updated checkout object.
  """
  checkout: Checkout

  """
  List of errors that occurred executing the mutation.
  """
  checkoutUserErrors: [CheckoutUserError!]!

  """
  List of errors that occurred executing the mutation.
  """
  userErrors: [UserError!]!
    @deprecated(reason: "Use \`checkoutUserErrors\` instead")
}

"""
Return type for \`checkoutShippingLineUpdate\` mutation.
"""
type CheckoutShippingLineUpdatePayload {
  """
  The updated checkout object.
  """
  checkout: Checkout

  """
  List of errors that occurred executing the mutation.
  """
  checkoutUserErrors: [CheckoutUserError!]!

  """
  List of errors that occurred executing the mutation.
  """
  userErrors: [UserError!]!
    @deprecated(reason: "Use \`checkoutUserErrors\` instead")
}

"""
Represents an error that happens during execution of a checkout mutation.
"""
type CheckoutUserError implements DisplayableError {
  """
  Error code to uniquely identify the error.
  """
  code: CheckoutErrorCode

  """
  Path to the input field which caused the error.
  """
  field: [String!]

  """
  The error message.
  """
  message: String!
}

"""
A collection represents a grouping of products that a shop owner can create to
organize them or make their shops easier to browse.
"""
type Collection implements Node {
  # """
  # A categorization that a product can be tagged with, commonly used for filtering and searching.
  # Additional access scope required for private apps: unauthenticated_read_product_tags.
  # """
  # tags: [String!]! #Custom
  
  """
  Stripped description of the collection, single line with HTML tags removed.
  """
  description(
    """
    Truncates string after the given length.
    """
    truncateAt: Int
  ): String

  #  """
  #  The description of the collection, complete with HTML formatting.
  #  """
  #  descriptionHtml: HTML!

  """
  A human-friendly unique string for the collection automatically generated from its title.
  Limit of 255 characters.
  """
  handle: String!

  """
  Globally unique identifier.
  """
  id: ID!

  """
  Image associated with the collection.
  """
  image: Image
  #  image(
  #    """
  #    Image width in pixels between 1 and 2048. This argument is deprecated: Use \`maxWidth\` on \`Image.transformedSrc\` instead.
  #    """
  #    maxWidth: Int
  #
  #    """
  #    Image height in pixels between 1 and 2048. This argument is deprecated: Use
  #    \`maxHeight\` on \`Image.transformedSrc\` instead.
  #    """
  #    maxHeight: Int
  #
  #    """
  #    Crops the image according to the specified region. This argument is
  #    deprecated: Use \`crop\` on \`Image.transformedSrc\` instead.
  #    """
  #    crop: CropRegion
  #
  #    """
  #    Image size multiplier for high-resolution retina displays. Must be between 1
  #    and 3. This argument is deprecated: Use \`scale\` on \`Image.transformedSrc\` instead.
  #    """
  #    scale: Int = 1
  #  ): Image

  """
  List of products in the collection.
  """
  products(
    """
    Page used in pagination
    """
    pageNumber: Int
    
    """
    Amount of items on a single page.
    """
    itemsPerPage: Int
    
    """
    Returns up to the first \`n\` elements from the list.
    """
    first: Int

    """
    Returns the elements that come after the specified cursor.
    """
    after: String

    """
    Returns up to the last \`n\` elements from the list.
    """
    last: Int

    """
    Returns the elements that come before the specified cursor.
    """
    before: String

    """
    Reverse the order of the underlying list.
    """
    reverse: Boolean = false

    """
    Sort the underlying list by the given key.
    """
    sortKey: ProductCollectionSortKeys = COLLECTION_DEFAULT
  ): ProductConnection!

  """
  The collection’s name. Limit of 255 characters.
  """
  title: String!

  """
  The date and time when the collection was last modified.
  """
  updatedAt: DateTime!
}

type CollectionConnection {
  """
  A list of edges.
  """
  edges: [CollectionEdge!]!

  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
}

type CollectionEdge {
  """
  A cursor for use in pagination.
  """
  cursor: String!

  """
  The item at the end of CollectionEdge.
  """
  node: Collection!
}

"""
The set of valid sort keys for the collections query.
"""
enum CollectionSortKeys {
  """
  Sort by the \`title\` value.
  """
  TITLE

  """
  Sort by the \`updated_at\` value.
  """
  UPDATED_AT

  """
  Sort by the \`id\` value.
  """
  ID

  """
  During a search (i.e. when the \`query\` parameter has been specified on the connection) this sorts the
  results by relevance to the search term(s). When no search query is specified, this sort key is not
  deterministic and should not be used.
  """
  RELEVANCE
}

type Comment implements Node {
  """
  The comment’s author.
  """
  author: CommentAuthor!

  """
  Stripped content of the comment, single line with HTML tags removed.
  """
  content(
    """
    Truncates string after the given length.
    """
    truncateAt: Int
  ): String!

  """
  The content of the comment, complete with HTML formatting.
  """
  contentHtml: HTML!

  """
  Globally unique identifier.
  """
  id: ID!
}

type CommentAuthor {
  """
  The author's email.
  """
  email: String!

  """
  The author’s name.
  """
  name: String!
}

type CommentConnection {
  """
  A list of edges.
  """
  edges: [CommentEdge!]!

  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
}

type CommentEdge {
  """
  A cursor for use in pagination.
  """
  cursor: String!

  """
  The item at the end of CommentEdge.
  """
  node: Comment!
}

"""
ISO 3166-1 alpha-2 country codes with some differences.
"""
enum CountryCode {
  """
  Afghanistan.
  """
  AF

  """
  Aland Islands.
  """
  AX

  """
  Albania.
  """
  AL

  """
  Algeria.
  """
  DZ

  """
  Andorra.
  """
  AD

  """
  Angola.
  """
  AO

  """
  Anguilla.
  """
  AI

  """
  Antigua And Barbuda.
  """
  AG

  """
  Argentina.
  """
  AR

  """
  Armenia.
  """
  AM

  """
  Aruba.
  """
  AW

  """
  Australia.
  """
  AU

  """
  Austria.
  """
  AT

  """
  Azerbaijan.
  """
  AZ

  """
  Bahamas.
  """
  BS

  """
  Bahrain.
  """
  BH

  """
  Bangladesh.
  """
  BD

  """
  Barbados.
  """
  BB

  """
  Belarus.
  """
  BY

  """
  Belgium.
  """
  BE

  """
  Belize.
  """
  BZ

  """
  Benin.
  """
  BJ

  """
  Bermuda.
  """
  BM

  """
  Bhutan.
  """
  BT

  """
  Bolivia.
  """
  BO

  """
  Bonaire, Sint Eustatius and Saba.
  """
  BQ

  """
  Bosnia And Herzegovina.
  """
  BA

  """
  Botswana.
  """
  BW

  """
  Bouvet Island.
  """
  BV

  """
  Brazil.
  """
  BR

  """
  British Indian Ocean Territory.
  """
  IO

  """
  Brunei.
  """
  BN

  """
  Bulgaria.
  """
  BG

  """
  Burkina Faso.
  """
  BF

  """
  Burundi.
  """
  BI

  """
  Cambodia.
  """
  KH

  """
  Canada.
  """
  CA

  """
  Cape Verde.
  """
  CV

  """
  Cayman Islands.
  """
  KY

  """
  Central African Republic.
  """
  CF

  """
  Chad.
  """
  TD

  """
  Chile.
  """
  CL

  """
  China.
  """
  CN

  """
  Christmas Island.
  """
  CX

  """
  Cocos (Keeling) Islands.
  """
  CC

  """
  Colombia.
  """
  CO

  """
  Comoros.
  """
  KM

  """
  Congo.
  """
  CG

  """
  Congo, The Democratic Republic Of The.
  """
  CD

  """
  Cook Islands.
  """
  CK

  """
  Costa Rica.
  """
  CR

  """
  Croatia.
  """
  HR

  """
  Cuba.
  """
  CU

  """
  Curaçao.
  """
  CW

  """
  Cyprus.
  """
  CY

  """
  Czech Republic.
  """
  CZ

  """
  Côte d'Ivoire.
  """
  CI

  """
  Denmark.
  """
  DK

  """
  Djibouti.
  """
  DJ

  """
  Dominica.
  """
  DM

  """
  Dominican Republic.
  """
  DO

  """
  Ecuador.
  """
  EC

  """
  Egypt.
  """
  EG

  """
  El Salvador.
  """
  SV

  """
  Equatorial Guinea.
  """
  GQ

  """
  Eritrea.
  """
  ER

  """
  Estonia.
  """
  EE

  """
  Ethiopia.
  """
  ET

  """
  Falkland Islands (Malvinas).
  """
  FK

  """
  Faroe Islands.
  """
  FO

  """
  Fiji.
  """
  FJ

  """
  Finland.
  """
  FI

  """
  France.
  """
  FR

  """
  French Guiana.
  """
  GF

  """
  French Polynesia.
  """
  PF

  """
  French Southern Territories.
  """
  TF

  """
  Gabon.
  """
  GA

  """
  Gambia.
  """
  GM

  """
  Georgia.
  """
  GE

  """
  Germany.
  """
  DE

  """
  Ghana.
  """
  GH

  """
  Gibraltar.
  """
  GI

  """
  Greece.
  """
  GR

  """
  Greenland.
  """
  GL

  """
  Grenada.
  """
  GD

  """
  Guadeloupe.
  """
  GP

  """
  Guatemala.
  """
  GT

  """
  Guernsey.
  """
  GG

  """
  Guinea.
  """
  GN

  """
  Guinea Bissau.
  """
  GW

  """
  Guyana.
  """
  GY

  """
  Haiti.
  """
  HT

  """
  Heard Island And Mcdonald Islands.
  """
  HM

  """
  Holy See (Vatican City State).
  """
  VA

  """
  Honduras.
  """
  HN

  """
  Hong Kong.
  """
  HK

  """
  Hungary.
  """
  HU

  """
  Iceland.
  """
  IS

  """
  India.
  """
  IN

  """
  Indonesia.
  """
  ID

  """
  Iran, Islamic Republic Of.
  """
  IR

  """
  Iraq.
  """
  IQ

  """
  Ireland.
  """
  IE

  """
  Isle Of Man.
  """
  IM

  """
  Israel.
  """
  IL

  """
  Italy.
  """
  IT

  """
  Jamaica.
  """
  JM

  """
  Japan.
  """
  JP

  """
  Jersey.
  """
  JE

  """
  Jordan.
  """
  JO

  """
  Kazakhstan.
  """
  KZ

  """
  Kenya.
  """
  KE

  """
  Kiribati.
  """
  KI

  """
  Korea, Democratic People's Republic Of.
  """
  KP

  """
  Kosovo.
  """
  XK

  """
  Kuwait.
  """
  KW

  """
  Kyrgyzstan.
  """
  KG

  """
  Lao People's Democratic Republic.
  """
  LA

  """
  Latvia.
  """
  LV

  """
  Lebanon.
  """
  LB

  """
  Lesotho.
  """
  LS

  """
  Liberia.
  """
  LR

  """
  Libyan Arab Jamahiriya.
  """
  LY

  """
  Liechtenstein.
  """
  LI

  """
  Lithuania.
  """
  LT

  """
  Luxembourg.
  """
  LU

  """
  Macao.
  """
  MO

  """
  Macedonia, Republic Of.
  """
  MK

  """
  Madagascar.
  """
  MG

  """
  Malawi.
  """
  MW

  """
  Malaysia.
  """
  MY

  """
  Maldives.
  """
  MV

  """
  Mali.
  """
  ML

  """
  Malta.
  """
  MT

  """
  Martinique.
  """
  MQ

  """
  Mauritania.
  """
  MR

  """
  Mauritius.
  """
  MU

  """
  Mayotte.
  """
  YT

  """
  Mexico.
  """
  MX

  """
  Moldova, Republic of.
  """
  MD

  """
  Monaco.
  """
  MC

  """
  Mongolia.
  """
  MN

  """
  Montenegro.
  """
  ME

  """
  Montserrat.
  """
  MS

  """
  Morocco.
  """
  MA

  """
  Mozambique.
  """
  MZ

  """
  Myanmar.
  """
  MM

  """
  Namibia.
  """
  NA

  """
  Nauru.
  """
  NR

  """
  Nepal.
  """
  NP

  """
  Netherlands.
  """
  NL

  """
  Netherlands Antilles.
  """
  AN

  """
  New Caledonia.
  """
  NC

  """
  New Zealand.
  """
  NZ

  """
  Nicaragua.
  """
  NI

  """
  Niger.
  """
  NE

  """
  Nigeria.
  """
  NG

  """
  Niue.
  """
  NU

  """
  Norfolk Island.
  """
  NF

  """
  Norway.
  """
  NO

  """
  Oman.
  """
  OM

  """
  Pakistan.
  """
  PK

  """
  Palestinian Territory, Occupied.
  """
  PS

  """
  Panama.
  """
  PA

  """
  Papua New Guinea.
  """
  PG

  """
  Paraguay.
  """
  PY

  """
  Peru.
  """
  PE

  """
  Philippines.
  """
  PH

  """
  Pitcairn.
  """
  PN

  """
  Poland.
  """
  PL

  """
  Portugal.
  """
  PT

  """
  Qatar.
  """
  QA

  """
  Republic of Cameroon.
  """
  CM

  """
  Reunion.
  """
  RE

  """
  Romania.
  """
  RO

  """
  Russia.
  """
  RU

  """
  Rwanda.
  """
  RW

  """
  Saint Barthélemy.
  """
  BL

  """
  Saint Helena.
  """
  SH

  """
  Saint Kitts And Nevis.
  """
  KN

  """
  Saint Lucia.
  """
  LC

  """
  Saint Martin.
  """
  MF

  """
  Saint Pierre And Miquelon.
  """
  PM

  """
  Samoa.
  """
  WS

  """
  San Marino.
  """
  SM

  """
  Sao Tome And Principe.
  """
  ST

  """
  Saudi Arabia.
  """
  SA

  """
  Senegal.
  """
  SN

  """
  Serbia.
  """
  RS

  """
  Seychelles.
  """
  SC

  """
  Sierra Leone.
  """
  SL

  """
  Singapore.
  """
  SG

  """
  Sint Maarten.
  """
  SX

  """
  Slovakia.
  """
  SK

  """
  Slovenia.
  """
  SI

  """
  Solomon Islands.
  """
  SB

  """
  Somalia.
  """
  SO

  """
  South Africa.
  """
  ZA

  """
  South Georgia And The South Sandwich Islands.
  """
  GS

  """
  South Korea.
  """
  KR

  """
  South Sudan.
  """
  SS

  """
  Spain.
  """
  ES

  """
  Sri Lanka.
  """
  LK

  """
  St. Vincent.
  """
  VC

  """
  Sudan.
  """
  SD

  """
  Suriname.
  """
  SR

  """
  Svalbard And Jan Mayen.
  """
  SJ

  """
  Swaziland.
  """
  SZ

  """
  Sweden.
  """
  SE

  """
  Switzerland.
  """
  CH

  """
  Syria.
  """
  SY

  """
  Taiwan.
  """
  TW

  """
  Tajikistan.
  """
  TJ

  """
  Tanzania, United Republic Of.
  """
  TZ

  """
  Thailand.
  """
  TH

  """
  Timor Leste.
  """
  TL

  """
  Togo.
  """
  TG

  """
  Tokelau.
  """
  TK

  """
  Tonga.
  """
  TO

  """
  Trinidad and Tobago.
  """
  TT

  """
  Tunisia.
  """
  TN

  """
  Turkey.
  """
  TR

  """
  Turkmenistan.
  """
  TM

  """
  Turks and Caicos Islands.
  """
  TC

  """
  Tuvalu.
  """
  TV

  """
  Uganda.
  """
  UG

  """
  Ukraine.
  """
  UA

  """
  United Arab Emirates.
  """
  AE

  """
  United Kingdom.
  """
  GB

  """
  United States.
  """
  US

  """
  United States Minor Outlying Islands.
  """
  UM

  """
  Uruguay.
  """
  UY

  """
  Uzbekistan.
  """
  UZ

  """
  Vanuatu.
  """
  VU

  """
  Venezuela.
  """
  VE

  """
  Vietnam.
  """
  VN

  """
  Virgin Islands, British.
  """
  VG

  """
  Wallis And Futuna.
  """
  WF

  """
  Western Sahara.
  """
  EH

  """
  Yemen.
  """
  YE

  """
  Zambia.
  """
  ZM

  """
  Zimbabwe.
  """
  ZW
}

"""
Credit card information used for a payment.
"""
type CreditCard {
  brand: String
  expiryMonth: Int
  expiryYear: Int
  firstDigits: String
  firstName: String
  lastDigits: String
  lastName: String

  """
  Masked credit card number with only the last 4 digits displayed
  """
  maskedNumber: String
}

"""
Specifies the fields required to complete a checkout with
a Shopify vaulted credit card payment.
"""
input CreditCardPaymentInput {
  """
  The amount of the payment.
  """
  amount: MoneyInput!

  """
  A unique client generated key used to avoid duplicate charges. When a
  duplicate payment is found, the original is returned instead of creating a new one.
  """
  idempotencyKey: String!

  """
  The billing address for the payment.
  """
  billingAddress: MailingAddressInput!

  """
  The ID returned by Shopify's Card Vault.
  """
  vaultId: String!

  """
  Executes the payment in test mode if possible. Defaults to \`false\`.
  """
  test: Boolean = false
}

"""
Specifies the fields required to complete a checkout with
a Shopify vaulted credit card payment.
"""
input CreditCardPaymentInputV2 {
  """
  The amount and currency of the payment.
  """
  paymentAmount: MoneyInput!

  """
  A unique client generated key used to avoid duplicate charges. When a
  duplicate payment is found, the original is returned instead of creating a new one.
  """
  idempotencyKey: String!

  """
  The billing address for the payment.
  """
  billingAddress: MailingAddressInput!

  """
  The ID returned by Shopify's Card Vault.
  """
  vaultId: String!

  """
  Executes the payment in test mode if possible. Defaults to \`false\`.
  """
  test: Boolean = false
}

"""
The part of the image that should remain after cropping.
"""
enum CropRegion {
  """
  Keep the center of the image
  """
  CENTER

  """
  Keep the top of the image
  """
  TOP

  """
  Keep the bottom of the image
  """
  BOTTOM

  """
  Keep the left of the image
  """
  LEFT

  """
  Keep the right of the image
  """
  RIGHT
}

"""
Currency codes
"""
enum CurrencyCode {
  """
  United States Dollars (USD).
  """
  USD

  """
  Euro (EUR).
  """
  EUR

  """
  United Kingdom Pounds (GBP).
  """
  GBP

  """
  Canadian Dollars (CAD).
  """
  CAD

  """
  Afghan Afghani (AFN).
  """
  AFN

  """
  Albanian Lek (ALL).
  """
  ALL

  """
  Algerian Dinar (DZD).
  """
  DZD

  """
  Angolan Kwanza (AOA).
  """
  AOA

  """
  Argentine Pesos (ARS).
  """
  ARS

  """
  Armenian Dram (AMD).
  """
  AMD

  """
  Aruban Florin (AWG).
  """
  AWG

  """
  Australian Dollars (AUD).
  """
  AUD

  """
  Barbadian Dollar (BBD).
  """
  BBD

  """
  Azerbaijani Manat (AZN).
  """
  AZN

  """
  Bangladesh Taka (BDT).
  """
  BDT

  """
  Bahamian Dollar (BSD).
  """
  BSD

  """
  Bahraini Dinar (BHD).
  """
  BHD

  """
  Burundian Franc (BIF).
  """
  BIF

  """
  Belarusian Ruble (BYR).
  """
  BYR
    @deprecated(
      reason: "\`BYR\` is deprecated. Use \`BYN\` available from version \`2019-10\` onwards instead."
    )

  """
  Belize Dollar (BZD).
  """
  BZD

  """
  Bermudian Dollar (BMD).
  """
  BMD

  """
  Bhutanese Ngultrum (BTN).
  """
  BTN

  """
  Bosnia and Herzegovina Convertible Mark (BAM).
  """
  BAM

  """
  Brazilian Real (BRL).
  """
  BRL

  """
  Bolivian Boliviano (BOB).
  """
  BOB

  """
  Botswana Pula (BWP).
  """
  BWP

  """
  Brunei Dollar (BND).
  """
  BND

  """
  Bulgarian Lev (BGN).
  """
  BGN

  """
  Burmese Kyat (MMK).
  """
  MMK

  """
  Cambodian Riel.
  """
  KHR

  """
  Cape Verdean escudo (CVE).
  """
  CVE

  """
  Cayman Dollars (KYD).
  """
  KYD

  """
  Central African CFA Franc (XAF).
  """
  XAF

  """
  Chilean Peso (CLP).
  """
  CLP

  """
  Chinese Yuan Renminbi (CNY).
  """
  CNY

  """
  Colombian Peso (COP).
  """
  COP

  """
  Comorian Franc (KMF).
  """
  KMF

  """
  Congolese franc (CDF).
  """
  CDF

  """
  Costa Rican Colones (CRC).
  """
  CRC

  """
  Croatian Kuna (HRK).
  """
  HRK

  """
  Czech Koruny (CZK).
  """
  CZK

  """
  Danish Kroner (DKK).
  """
  DKK

  """
  Dominican Peso (DOP).
  """
  DOP

  """
  East Caribbean Dollar (XCD).
  """
  XCD

  """
  Egyptian Pound (EGP).
  """
  EGP

  """
  Ethiopian Birr (ETB).
  """
  ETB

  """
  CFP Franc (XPF).
  """
  XPF

  """
  Fijian Dollars (FJD).
  """
  FJD

  """
  Gambian Dalasi (GMD).
  """
  GMD

  """
  Ghanaian Cedi (GHS).
  """
  GHS

  """
  Guatemalan Quetzal (GTQ).
  """
  GTQ

  """
  Guyanese Dollar (GYD).
  """
  GYD

  """
  Georgian Lari (GEL).
  """
  GEL

  """
  Haitian Gourde (HTG).
  """
  HTG

  """
  Honduran Lempira (HNL).
  """
  HNL

  """
  Hong Kong Dollars (HKD).
  """
  HKD

  """
  Hungarian Forint (HUF).
  """
  HUF

  """
  Icelandic Kronur (ISK).
  """
  ISK

  """
  Indian Rupees (INR).
  """
  INR

  """
  Indonesian Rupiah (IDR).
  """
  IDR

  """
  Israeli New Shekel (NIS).
  """
  ILS

  """
  Iraqi Dinar (IQD).
  """
  IQD

  """
  Jamaican Dollars (JMD).
  """
  JMD

  """
  Japanese Yen (JPY).
  """
  JPY

  """
  Jersey Pound.
  """
  JEP

  """
  Jordanian Dinar (JOD).
  """
  JOD

  """
  Kazakhstani Tenge (KZT).
  """
  KZT

  """
  Kenyan Shilling (KES).
  """
  KES

  """
  Kuwaiti Dinar (KWD).
  """
  KWD

  """
  Kyrgyzstani Som (KGS).
  """
  KGS

  """
  Laotian Kip (LAK).
  """
  LAK

  """
  Latvian Lati (LVL).
  """
  LVL

  """
  Lebanese Pounds (LBP).
  """
  LBP

  """
  Lesotho Loti (LSL).
  """
  LSL

  """
  Liberian Dollar (LRD).
  """
  LRD

  """
  Lithuanian Litai (LTL).
  """
  LTL

  """
  Malagasy Ariary (MGA).
  """
  MGA

  """
  Macedonia Denar (MKD).
  """
  MKD

  """
  Macanese Pataca (MOP).
  """
  MOP

  """
  Malawian Kwacha (MWK).
  """
  MWK

  """
  Maldivian Rufiyaa (MVR).
  """
  MVR

  """
  Mexican Pesos (MXN).
  """
  MXN

  """
  Malaysian Ringgits (MYR).
  """
  MYR

  """
  Mauritian Rupee (MUR).
  """
  MUR

  """
  Moldovan Leu (MDL).
  """
  MDL

  """
  Moroccan Dirham.
  """
  MAD

  """
  Mongolian Tugrik.
  """
  MNT

  """
  Mozambican Metical.
  """
  MZN

  """
  Namibian Dollar.
  """
  NAD

  """
  Nepalese Rupee (NPR).
  """
  NPR

  """
  Netherlands Antillean Guilder.
  """
  ANG

  """
  New Zealand Dollars (NZD).
  """
  NZD

  """
  Nicaraguan Córdoba (NIO).
  """
  NIO

  """
  Nigerian Naira (NGN).
  """
  NGN

  """
  Norwegian Kroner (NOK).
  """
  NOK

  """
  Omani Rial (OMR).
  """
  OMR

  """
  Panamian Balboa (PAB).
  """
  PAB

  """
  Pakistani Rupee (PKR).
  """
  PKR

  """
  Papua New Guinean Kina (PGK).
  """
  PGK

  """
  Paraguayan Guarani (PYG).
  """
  PYG

  """
  Peruvian Nuevo Sol (PEN).
  """
  PEN

  """
  Philippine Peso (PHP).
  """
  PHP

  """
  Polish Zlotych (PLN).
  """
  PLN

  """
  Qatari Rial (QAR).
  """
  QAR

  """
  Romanian Lei (RON).
  """
  RON

  """
  Russian Rubles (RUB).
  """
  RUB

  """
  Rwandan Franc (RWF).
  """
  RWF

  """
  Samoan Tala (WST).
  """
  WST

  """
  Saudi Riyal (SAR).
  """
  SAR

  """
  Sao Tome And Principe Dobra (STD).
  """
  STD

  """
  Serbian dinar (RSD).
  """
  RSD

  """
  Seychellois Rupee (SCR).
  """
  SCR

  """
  Singapore Dollars (SGD).
  """
  SGD

  """
  Sudanese Pound (SDG).
  """
  SDG

  """
  Syrian Pound (SYP).
  """
  SYP

  """
  South African Rand (ZAR).
  """
  ZAR

  """
  South Korean Won (KRW).
  """
  KRW

  """
  South Sudanese Pound (SSP).
  """
  SSP

  """
  Solomon Islands Dollar (SBD).
  """
  SBD

  """
  Sri Lankan Rupees (LKR).
  """
  LKR

  """
  Surinamese Dollar (SRD).
  """
  SRD

  """
  Swazi Lilangeni (SZL).
  """
  SZL

  """
  Swedish Kronor (SEK).
  """
  SEK

  """
  Swiss Francs (CHF).
  """
  CHF

  """
  Taiwan Dollars (TWD).
  """
  TWD

  """
  Thai baht (THB).
  """
  THB

  """
  Tanzanian Shilling (TZS).
  """
  TZS

  """
  Trinidad and Tobago Dollars (TTD).
  """
  TTD

  """
  Tunisian Dinar (TND).
  """
  TND

  """
  Turkish Lira (TRY).
  """
  TRY

  """
  Turkmenistani Manat (TMT).
  """
  TMT

  """
  Ugandan Shilling (UGX).
  """
  UGX

  """
  Ukrainian Hryvnia (UAH).
  """
  UAH

  """
  United Arab Emirates Dirham (AED).
  """
  AED

  """
  Uruguayan Pesos (UYU).
  """
  UYU

  """
  Uzbekistan som (UZS).
  """
  UZS

  """
  Vanuatu Vatu (VUV).
  """
  VUV

  """
  Venezuelan Bolivares (VEF).
  """
  VEF

  """
  Vietnamese đồng (VND).
  """
  VND

  """
  West African CFA franc (XOF).
  """
  XOF

  """
  Yemeni Rial (YER).
  """
  YER

  """
  Zambian Kwacha (ZMW).
  """
  ZMW
}

"""
A customer represents a customer account with the shop. Customer accounts store
contact information for the customer, saving logged-in customers the trouble of
having to provide it at every checkout.
"""
type Customer {
  """
  Indicates whether the customer has consented to be sent marketing material via email.
  """
  acceptsMarketing: Boolean!

  """
  A list of addresses for the customer.
  """
  addresses(
    """
    Page used in pagination
    """
    pageNumber: Int
    
    """
    Amount of items on a single page.
    """
    itemsPerPage: Int
    
    """
    Returns up to the first \`n\` elements from the list.
    """
    first: Int

    """
    Returns the elements that come after the specified cursor.
    """
    after: String

    """
    Returns up to the last \`n\` elements from the list.
    """
    last: Int

    """
    Returns the elements that come before the specified cursor.
    """
    before: String

    """
    Reverse the order of the underlying list.
    """
    reverse: Boolean = false
  ): MailingAddressConnection!

  """
  The date and time when the customer was created.
  """
  createdAt: DateTime!

  """
  The customer’s default address.
  """
  defaultAddress: MailingAddress

  """
  The customer’s name, email or phone number.
  """
  displayName: String!

  """
  The customer’s email address.
  """
  email: String

  """
  The customer’s first name.
  """
  firstName: String

  """
  A unique identifier for the customer.
  """
  id: ID!

  """
  The customer's most recently updated, incomplete checkout.
  """
  lastIncompleteCheckout: Checkout

  """
  The customer’s last name.
  """
  lastName: String

  """
  The orders associated with the customer.
  """
  orders(
    """
    Page used in pagination
    """
    pageNumber: Int
    
    """
    Amount of items on a single page.
    """
    itemsPerPage: Int
    
    """
    Returns up to the first \`n\` elements from the list.
    """
    first: Int

    """
    Returns the elements that come after the specified cursor.
    """
    after: String

    """
    Returns up to the last \`n\` elements from the list.
    """
    last: Int

    """
    Returns the elements that come before the specified cursor.
    """
    before: String

    """
    Reverse the order of the underlying list.
    """
    reverse: Boolean = false

    """
    Sort the underlying list by the given key.
    """
    sortKey: OrderSortKeys = ID

    """
    Supported filter parameters:
     - \`processed_at\`

    See the detailed [search syntax](https://help.shopify.com/api/getting-started/search-syntax).
    """
    query: String
  ): OrderConnection!

  """
  The customer’s phone number.
  """
  phone: String

  """
  A list of tags assigned to the customer.
  Additional access scope required: unauthenticated_read_customer_tags.
  """
  tags: [String!]!

  """
  The date and time when the customer information was updated.
  """
  updatedAt: DateTime!
}

"""
A CustomerAccessToken represents the unique token required to make modifications to the customer object.
"""
type CustomerAccessToken {
  """
  The customer’s access token.
  """
  accessToken: String!

  """
  The date and time when the customer access token expires.
  """
  expiresAt: DateTime!
}

"""
Specifies the input fields required to create a customer access token.
"""
input CustomerAccessTokenCreateInput {
  """
  The email associated to the customer.
  """
  email: String!

  """
  The login password to be used by the customer.
  """
  password: String!
}

"""
Return type for \`customerAccessTokenCreate\` mutation.
"""
type CustomerAccessTokenCreatePayload {
  """
  The newly created customer access token object.
  """
  customerAccessToken: CustomerAccessToken

  """
  List of errors that occurred executing the mutation.
  """
  customerUserErrors: [CustomerUserError!]!

  """
  List of errors that occurred executing the mutation.
  """
  userErrors: [UserError!]!
    @deprecated(reason: "Use \`customerUserErrors\` instead")
}

"""
Return type for \`customerAccessTokenDelete\` mutation.
"""
type CustomerAccessTokenDeletePayload {
  """
  The destroyed access token.
  """
  deletedAccessToken: String

  """
  ID of the destroyed customer access token.
  """
  deletedCustomerAccessTokenId: String

  """
  List of errors that occurred executing the mutation.
  """
  userErrors: [UserError!]!
}

"""
Return type for \`customerAccessTokenRenew\` mutation.
"""
type CustomerAccessTokenRenewPayload {
  """
  The renewed customer access token object.
  """
  customerAccessToken: CustomerAccessToken

  """
  List of errors that occurred executing the mutation.
  """
  userErrors: [UserError!]!
}

"""
Specifies the input fields required to activate a customer.
"""
input CustomerActivateInput {
  """
  The activation token required to activate the customer.
  """
  activationToken: String!

  """
  New password that will be set during activation.
  """
  password: String!
}

"""
Return type for \`customerActivate\` mutation.
"""
type CustomerActivatePayload {
  """
  The customer object.
  """
  customer: Customer

  """
  A newly created customer access token object for the customer.
  """
  customerAccessToken: CustomerAccessToken

  """
  List of errors that occurred executing the mutation.
  """
  customerUserErrors: [CustomerUserError!]!

  """
  List of errors that occurred executing the mutation.
  """
  userErrors: [UserError!]!
    @deprecated(reason: "Use \`customerUserErrors\` instead")
}

"""
Return type for \`customerAddressCreate\` mutation.
"""
type CustomerAddressCreatePayload {
  """
  The new customer address object.
  """
  customerAddress: MailingAddress

  """
  List of errors that occurred executing the mutation.
  """
  customerUserErrors: [CustomerUserError!]!

  """
  List of errors that occurred executing the mutation.
  """
  userErrors: [UserError!]!
    @deprecated(reason: "Use \`customerUserErrors\` instead")
}

"""
Return type for \`customerAddressDelete\` mutation.
"""
type CustomerAddressDeletePayload {
  """
  List of errors that occurred executing the mutation.
  """
  customerUserErrors: [CustomerUserError!]!

  """
  ID of the deleted customer address.
  """
  deletedCustomerAddressId: String

  """
  List of errors that occurred executing the mutation.
  """
  userErrors: [UserError!]!
    @deprecated(reason: "Use \`customerUserErrors\` instead")
}

"""
Return type for \`customerAddressUpdate\` mutation.
"""
type CustomerAddressUpdatePayload {
  """
  The customer’s updated mailing address.
  """
  customerAddress: MailingAddress

  """
  List of errors that occurred executing the mutation.
  """
  customerUserErrors: [CustomerUserError!]!

  """
  List of errors that occurred executing the mutation.
  """
  userErrors: [UserError!]!
    @deprecated(reason: "Use \`customerUserErrors\` instead")
}

"""
Specifies the fields required to create a new Customer.
"""
input CustomerCreateInput {
  """
  The customer’s first name.
  """
  firstName: String

  """
  The customer’s last name.
  """
  lastName: String

  """
  The customer’s email.
  """
  email: String!

  """
  The customer’s phone number.
  """
  phone: String

  """
  The login password used by the customer.
  """
  password: String!

  """
  Indicates whether the customer has consented to be sent marketing material via email.
  """
  acceptsMarketing: Boolean
}

"""
Return type for \`customerCreate\` mutation.
"""
type CustomerCreatePayload {
  """
  The created customer object.
  """
  customer: Customer

  """
  List of errors that occurred executing the mutation.
  """
  customerUserErrors: [CustomerUserError!]!

  """
  List of errors that occurred executing the mutation.
  """
  userErrors: [UserError!]!
    @deprecated(reason: "Use \`customerUserErrors\` instead")
}

"""
Return type for \`customerDefaultAddressUpdate\` mutation.
"""
type CustomerDefaultAddressUpdatePayload {
  """
  The updated customer object.
  """
  customer: Customer

  """
  List of errors that occurred executing the mutation.
  """
  customerUserErrors: [CustomerUserError!]!

  """
  List of errors that occurred executing the mutation.
  """
  userErrors: [UserError!]!
    @deprecated(reason: "Use \`customerUserErrors\` instead")
}

"""
Possible error codes that could be returned by a customer mutation.
"""
enum CustomerErrorCode {
  """
  Input value is blank.
  """
  BLANK

  """
  Input value is invalid.
  """
  INVALID

  """
  Input value is already taken.
  """
  TAKEN

  """
  Input value is too long.
  """
  TOO_LONG

  """
  Input value is too short.
  """
  TOO_SHORT

  """
  Unidentified customer.
  """
  UNIDENTIFIED_CUSTOMER

  """
  Customer is disabled.
  """
  CUSTOMER_DISABLED

  """
  Input password starts or ends with whitespace.
  """
  PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE

  """
  Input contains HTML tags.
  """
  CONTAINS_HTML_TAGS

  """
  Input contains URL.
  """
  CONTAINS_URL

  """
  Invalid activation token.
  """
  TOKEN_INVALID

  """
  Customer already enabled.
  """
  ALREADY_ENABLED

  """
  Address does not exist.
  """
  NOT_FOUND
}

"""
Return type for \`customerRecover\` mutation.
"""
type CustomerRecoverPayload {
  """
  List of errors that occurred executing the mutation.
  """
  customerUserErrors: [CustomerUserError!]!

  """
  List of errors that occurred executing the mutation.
  """
  userErrors: [UserError!]!
    @deprecated(reason: "Use \`customerUserErrors\` instead")
}

"""
Return type for \`customerResetByUrl\` mutation.
"""
type CustomerResetByUrlPayload {
  """
  The customer object which was reset.
  """
  customer: Customer

  """
  A newly created customer access token object for the customer.
  """
  customerAccessToken: CustomerAccessToken

  """
  List of errors that occurred executing the mutation.
  """
  customerUserErrors: [CustomerUserError!]!

  """
  List of errors that occurred executing the mutation.
  """
  userErrors: [UserError!]!
    @deprecated(reason: "Use \`customerUserErrors\` instead")
}

"""
Specifies the fields required to reset a Customer’s password.
"""
input CustomerResetInput {
  """
  The reset token required to reset the customer’s password.
  """
  resetToken: String!

  """
  New password that will be set as part of the reset password process.
  """
  password: String!
}

"""
Return type for \`customerReset\` mutation.
"""
type CustomerResetPayload {
  """
  The customer object which was reset.
  """
  customer: Customer

  """
  A newly created customer access token object for the customer.
  """
  customerAccessToken: CustomerAccessToken

  """
  List of errors that occurred executing the mutation.
  """
  customerUserErrors: [CustomerUserError!]!

  """
  List of errors that occurred executing the mutation.
  """
  userErrors: [UserError!]!
    @deprecated(reason: "Use \`customerUserErrors\` instead")
}

"""
Specifies the fields required to update the Customer information.
"""
input CustomerUpdateInput {
  """
  The customer’s first name.
  """
  firstName: String

  """
  The customer’s last name.
  """
  lastName: String

  """
  The customer’s email.
  """
  email: String

  """
  The customer’s phone number.
  """
  phone: String

  """
  The login password used by the customer.
  """
  password: String

  """
  Indicates whether the customer has consented to be sent marketing material via email.
  """
  acceptsMarketing: Boolean
}

"""
Return type for \`customerUpdate\` mutation.
"""
type CustomerUpdatePayload {
  """
  The updated customer object.
  """
  customer: Customer

  """
  The newly created customer access token. If the customer's password is updated, all previous access tokens
  (including the one used to perform this mutation) become invalid, and a new token is generated.
  """
  customerAccessToken: CustomerAccessToken

  """
  List of errors that occurred executing the mutation.
  """
  customerUserErrors: [CustomerUserError!]!

  """
  List of errors that occurred executing the mutation.
  """
  userErrors: [UserError!]!
    @deprecated(reason: "Use \`customerUserErrors\` instead")
}

"""
Represents an error that happens during execution of a customer mutation.
"""
type CustomerUserError implements DisplayableError {
  """
  Error code to uniquely identify the error.
  """
  code: CustomerErrorCode

  """
  Path to the input field which caused the error.
  """
  field: [String!]

  """
  The error message.
  """
  message: String!
}

scalar DateTime

"""
A signed decimal number, which supports arbitrary precision and is serialized as a string. Example value: \`"29.99"\`.
"""
scalar Decimal

"""
Digital wallet, such as Apple Pay, which can be used for accelerated checkouts.
"""
enum DigitalWallet {
  """
  Apple Pay.
  """
  APPLE_PAY

  """
  Android Pay.
  """
  ANDROID_PAY

  """
  Google Pay.
  """
  GOOGLE_PAY

  """
  Shopify Pay.
  """
  SHOPIFY_PAY
}

"""
An amount discounting the line that has been allocated by a discount.
"""
type DiscountAllocation {
  """
  Amount of discount allocated.
  """
  allocatedAmount: MoneyV2!

  """
  The discount this allocated amount originated from.
  """
  discountApplication: DiscountApplication!
}

"""
Discount applications capture the intentions of a discount source at
the time of application.
"""
interface DiscountApplication {
  """
  The method by which the discount's value is allocated to its entitled items.
  """
  allocationMethod: DiscountApplicationAllocationMethod!

  """
  Which lines of targetType that the discount is allocated over.
  """
  targetSelection: DiscountApplicationTargetSelection!

  """
  The type of line that the discount is applicable towards.
  """
  targetType: DiscountApplicationTargetType!

  """
  The value of the discount application.
  """
  value: PricingValue!
}

"""
The method by which the discount's value is allocated onto its entitled lines.
"""
enum DiscountApplicationAllocationMethod {
  """
  The value is spread across all entitled lines.
  """
  ACROSS

  """
  The value is applied onto every entitled line.
  """
  EACH

  """
  The value is specifically applied onto a particular line.
  """
  ONE
}

type DiscountApplicationConnection {
  """
  A list of edges.
  """
  edges: [DiscountApplicationEdge!]!

  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
}

type DiscountApplicationEdge {
  """
  A cursor for use in pagination.
  """
  cursor: String!

  """
  The item at the end of DiscountApplicationEdge.
  """
  node: DiscountApplication!
}

"""
Which lines on the order that the discount is allocated over, of the type
defined by the Discount Application's target_type.
"""
enum DiscountApplicationTargetSelection {
  """
  The discount is allocated onto all the lines.
  """
  ALL

  """
  The discount is allocated onto only the lines it is entitled for.
  """
  ENTITLED

  """
  The discount is allocated onto explicitly chosen lines.
  """
  EXPLICIT
}

"""
The type of line (i.e. line item or shipping line) on an order that the discount is applicable towards.
"""
enum DiscountApplicationTargetType {
  """
  The discount applies onto line items.
  """
  LINE_ITEM

  """
  The discount applies onto shipping lines.
  """
  SHIPPING_LINE
}

"""
Discount code applications capture the intentions of a discount code at
the time that it is applied.
"""
type DiscountCodeApplication implements DiscountApplication {
  """
  The method by which the discount's value is allocated to its entitled items.
  """
  allocationMethod: DiscountApplicationAllocationMethod!

  """
  Specifies whether the discount code was applied successfully.
  """
  applicable: Boolean!

  """
  The string identifying the discount code that was used at the time of application.
  """
  code: String!

  """
  Which lines of targetType that the discount is allocated over.
  """
  targetSelection: DiscountApplicationTargetSelection!

  """
  The type of line that the discount is applicable towards.
  """
  targetType: DiscountApplicationTargetType!

  """
  The value of the discount application.
  """
  value: PricingValue!
}

"""
Represents an error in the input of a mutation.
"""
interface DisplayableError {
  """
  Path to the input field which caused the error.
  """
  field: [String!]

  """
  The error message.
  """
  message: String!
}

"""
Represents a web address.
"""
type Domain {
  """
  The host name of the domain (eg: \`example.com\`).
  """
  host: String!

  """
  Whether SSL is enabled or not.
  """
  sslEnabled: Boolean!

  """
  The URL of the domain (eg: \`https://example.com\`).
  """
  url: URL!
}

"""
Represents a single fulfillment in an order.
"""
type Fulfillment {
  """
  List of the fulfillment's line items.
  """
  fulfillmentLineItems(
    """
    Page used in pagination
    """
    pageNumber: Int
    
    """
    Amount of items on a single page.
    """
    itemsPerPage: Int
    
    """
    Returns up to the first \`n\` elements from the list.
    """
    first: Int

    """
    Returns the elements that come after the specified cursor.
    """
    after: String

    """
    Returns up to the last \`n\` elements from the list.
    """
    last: Int

    """
    Returns the elements that come before the specified cursor.
    """
    before: String

    """
    Reverse the order of the underlying list.
    """
    reverse: Boolean = false
  ): FulfillmentLineItemConnection!

  """
  The name of the tracking company.
  """
  trackingCompany: String

  """
  Tracking information associated with the fulfillment,
  such as the tracking number and tracking URL.
  """
  trackingInfo(
    """
    Page used in pagination
    """
    pageNumber: Int
    
    """
    Amount of items on a single page.
    """
    itemsPerPage: Int
    
    """
    Truncate the array result to this size.
    """
    first: Int
  ): [FulfillmentTrackingInfo!]!
}

"""
Represents a single line item in a fulfillment. There is at most one fulfillment line item for each order line item.
"""
type FulfillmentLineItem {
  """
  The associated order's line item.
  """
  lineItem: OrderLineItem!

  """
  The amount fulfilled in this fulfillment.
  """
  quantity: Int!
}

type FulfillmentLineItemConnection {
  """
  A list of edges.
  """
  edges: [FulfillmentLineItemEdge!]!

  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
}

type FulfillmentLineItemEdge {
  """
  A cursor for use in pagination.
  """
  cursor: String!

  """
  The item at the end of FulfillmentLineItemEdge.
  """
  node: FulfillmentLineItem!
}

"""
Tracking information associated with the fulfillment.
"""
type FulfillmentTrackingInfo {
  """
  The tracking number of the fulfillment.
  """
  number: String

  """
  The URL to track the fulfillment.
  """
  url: URL
}

"""
Represents information about the metafields associated to the specified resource.
"""
interface HasMetafields {
  """
  The metafield associated with the resource.
  """
  metafield(
    """
    Container for a set of metafields (maximum of 20 characters).
    """
    namespace: String!

    """
    Identifier for the metafield (maximum of 30 characters).
    """
    key: String!
  ): Metafield

  """
  A paginated list of metafields associated with the resource.
  """
  metafields(
    """
    Container for a set of metafields (maximum of 20 characters).
    """
    namespace: String

    """
    Page used in pagination
    """
    pageNumber: Int
    
    """
    Amount of items on a single page.
    """
    itemsPerPage: Int
    
    """
    Returns up to the first \`n\` elements from the list.
    """
    first: Int

    """
    Returns the elements that come after the specified cursor.
    """
    after: String

    """
    Returns up to the last \`n\` elements from the list.
    """
    last: Int

    """
    Returns the elements that come before the specified cursor.
    """
    before: String

    """
    Reverse the order of the underlying list.
    """
    reverse: Boolean = false
  ): MetafieldConnection!
}

"""
A string containing HTML code. Example value: \`"<p>Grey cotton knit sweater.</p>"\`.
"""
scalar HTML

"""
Represents image variant.
"""
type ImageVariantSrc {
  width: Int!
  src: URL!
}

"""
Represents image variant.
"""
type ImageVariant {
  name: String
  srcset: [ImageVariantSrc!]!
  aspectRatio: Float!
}

"""
Represents an image resource.
"""
type Image {
  """
  A word or phrase to share the nature or contents of an image.
  """
  altText: String

  """
  A unique identifier for the image.
  """
  id: ID

  """
  The location of the original image as a URL.

  If there are any existing transformations in the original source URL, they will remain and not be stripped.
  """
  originalSrc: URL!

  variants: [ImageVariant!]!

  #  """
  #  The location of the image as a URL.
  #  """
  #  src: URL!
  #    @deprecated(
  #      reason: "Previously an image had a single \`src\` field. This could either return the original image\\nlocation or a URL that contained transformations such as sizing or scale.\\n\\nThese transformations were specified by arguments on the parent field.\\n\\nNow an image has two distinct URL fields: \`originalSrc\` and \`transformedSrc\`.\\n\\n* \`originalSrc\` - the original unmodified image URL\\n* \`transformedSrc\` - the image URL with the specified transformations included\\n\\nTo migrate to the new fields, image transformations should be moved from the parent field to \`transformedSrc\`.\\n\\nBefore:\\n\`\`\`graphql\\n{\\n  shop {\\n    productImages(maxWidth: 200, scale: 2) {\\n      edges {\\n        node {\\n          src\\n        }\\n      }\\n    }\\n  }\\n}\\n\`\`\`\\n\\nAfter:\\n\`\`\`graphql\\n{\\n  shop {\\n    productImages {\\n      edges {\\n        node {\\n          transformedSrc(maxWidth: 200, scale: 2)\\n        }\\n      }\\n    }\\n  }\\n}\\n\`\`\`\\n"
  #    )

  #  """
  #  The location of the transformed image as a URL.
  #
  #  All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
  #  Otherwise any transformations which an image type does not support will be ignored.
  #  """
  #  transformedSrc(
  #    """
  #    Image width in pixels between 1 and 5760.
  #    """
  #    maxWidth: Int
  #
  #    """
  #    Image height in pixels between 1 and 5760.
  #    """
  #    maxHeight: Int
  #
  #    """
  #    Crops the image according to the specified region.
  #    """
  #    crop: CropRegion
  #
  #    """
  #    Image size multiplier for high-resolution retina displays. Must be between 1 and 3.
  #    """
  #    scale: Int = 1
  #
  #    """
  #    Best effort conversion of image into content type (SVG -> PNG, Anything -> JGP, Anything -> WEBP are supported).
  #    """
  #    preferredContentType: ImageContentType
  #  ): URL!
}

type ImageConnection {
  """
  A list of edges.
  """
  edges: [ImageEdge!]!

  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
}

"""
List of supported image content types.
"""
enum ImageContentType {
  PNG
  JPG
  WEBP
}

type ImageEdge {
  """
  A cursor for use in pagination.
  """
  cursor: String!

  """
  The item at the end of ImageEdge.
  """
  node: Image!
}

"""
Represents a mailing address for customers and shipping.
"""
type MailingAddress implements Node {
  """
  The first line of the address. Typically the street address or PO Box number.
  """
  address1: String

  """
  The second line of the address. Typically the number of the apartment, suite, or unit.
  """
  address2: String

  """
  The name of the city, district, village, or town.
  """
  city: String

  """
  The name of the customer's company or organization.
  """
  company: String

  """
  The name of the country.
  """
  country: String

  """
  The two-letter code for the country of the address.

  For example, US.
  """
  countryCode: String @deprecated(reason: "Use \`countryCodeV2\` instead")

  """
  The two-letter code for the country of the address.

  For example, US.
  """
  countryCodeV2: CountryCode

  """
  The first name of the customer.
  """
  firstName: String

  """
  A formatted version of the address, customized by the provided arguments.
  """
  formatted(
    """
    Whether to include the customer's name in the formatted address.
    """
    withName: Boolean = false

    """
    Whether to include the customer's company in the formatted address.
    """
    withCompany: Boolean = true
  ): [String!]!

  """
  A comma-separated list of the values for city, province, and country.
  """
  formattedArea: String

  """
  Globally unique identifier.
  """
  id: ID!

  """
  The last name of the customer.
  """
  lastName: String

  """
  The latitude coordinate of the customer address.
  """
  latitude: Float

  """
  The longitude coordinate of the customer address.
  """
  longitude: Float

  """
  The full name of the customer, based on firstName and lastName.
  """
  name: String

  """
  A unique phone number for the customer.

  Formatted using E.164 standard. For example, _+16135551111_.
  """
  phone: String

  """
  The region of the address, such as the province, state, or district.
  """
  province: String

  """
  The two-letter code for the region.

  For example, ON.
  """
  provinceCode: String

  """
  The zip or postal code of the address.
  """
  zip: String
}

type MailingAddressConnection {
  """
  A list of edges.
  """
  edges: [MailingAddressEdge!]!

  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
}

type MailingAddressEdge {
  """
  A cursor for use in pagination.
  """
  cursor: String!

  """
  The item at the end of MailingAddressEdge.
  """
  node: MailingAddress!
}

"""
Specifies the fields accepted to create or update a mailing address.
"""
input MailingAddressInput {
  address1: String
  address2: String
  city: String
  company: String
  country: String
  firstName: String
  lastName: String
  phone: String
  province: String
  zip: String
}

"""
Manual discount applications capture the intentions of a discount that was manually created.
"""
type ManualDiscountApplication implements DiscountApplication {
  """
  The method by which the discount's value is allocated to its entitled items.
  """
  allocationMethod: DiscountApplicationAllocationMethod!

  """
  The description of the application.
  """
  description: String

  """
  Which lines of targetType that the discount is allocated over.
  """
  targetSelection: DiscountApplicationTargetSelection!

  """
  The type of line that the discount is applicable towards.
  """
  targetType: DiscountApplicationTargetType!

  """
  The title of the application.
  """
  title: String!

  """
  The value of the discount application.
  """
  value: PricingValue!
}

"""
Metafields represent custom metadata attached to a resource. Metafields can be sorted into namespaces and are
comprised of keys, values, and value types.
"""
type Metafield implements Node {
  """
  The description of a metafield.
  """
  description: String

  """
  Globally unique identifier.
  """
  id: ID!

  """
  The key name for a metafield.
  """
  key: String!

  """
  The namespace for a metafield.
  """
  namespace: String!

  """
  The parent object that the metafield belongs to.
  """
  parentResource: MetafieldParentResource!

  """
  The value of a metafield.
  """
  value: String!

  """
  Represents the metafield value type.
  """
  valueType: MetafieldValueType!
}

type MetafieldConnection {
  """
  A list of edges.
  """
  edges: [MetafieldEdge!]!

  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
}

type MetafieldEdge {
  """
  A cursor for use in pagination.
  """
  cursor: String!

  """
  The item at the end of MetafieldEdge.
  """
  node: Metafield!
}

"""
A resource that the metafield belongs to.
"""
union MetafieldParentResource = Product | ProductVariant

"""
Metafield value types.
"""
enum MetafieldValueType {
  """
  A string metafield.
  """
  STRING

  """
  An integer metafield.
  """
  INTEGER

  """
  A json string metafield.
  """
  JSON_STRING
}
#
#"""
#A monetary value string. Example value: \`"100.57"\`.
#"""
#scalar Money

"""
Specifies the fields for a monetary value with currency.
"""
input MoneyInput {
  """
  Decimal money amount.
  """
  amount: Decimal!

  """
  Currency of the money.
  """
  currencyCode: CurrencyCode!
}

"""
A monetary value with currency.

To format currencies, combine this type's amount and currencyCode fields with your client's locale.

For example, in JavaScript you could use Intl.NumberFormat:

\`\`\`js
new Intl.NumberFormat(locale, {
  style: 'currency',
  currency: currencyCode
}).format(amount);
\`\`\`

Other formatting libraries include:

* iOS - [NumberFormatter](https://developer.apple.com/documentation/foundation/numberformatter)
* Android - [NumberFormat](https://developer.android.com/reference/java/text/NumberFormat.html)
* PHP - [NumberFormatter](http://php.net/manual/en/class.numberformatter.php)

For a more general solution, the [Unicode CLDR number formatting database] is available with many implementations
(such as [TwitterCldr](https://github.com/twitter/twitter-cldr-rb)).
"""
type Money {
  """
  Decimal money amount.
  """
  amount: Decimal!

  """
  Currency of the money.
  """
  currencyCode: CurrencyCode!
}

# TODO: to remove later
type MoneyV2 {
  """
  Decimal money amount.
  """
  amount: Decimal!

  """
  Currency of the money.
  """
  currencyCode: CurrencyCode!
}

"""
The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start.
"""
type Mutation {
  """
  Updates the attributes of a checkout.
  """
  checkoutAttributesUpdate(
    """
    The ID of the checkout.
    """
    checkoutId: ID!
    input: CheckoutAttributesUpdateInput!
  ): CheckoutAttributesUpdatePayload
    @deprecated(reason: "Use \`checkoutAttributesUpdateV2\` instead")

  """
  Updates the attributes of a checkout.
  """
  checkoutAttributesUpdateV2(
    """
    The ID of the checkout.
    """
    checkoutId: ID!

    """
    The checkout attributes to update.
    """
    input: CheckoutAttributesUpdateV2Input!
  ): CheckoutAttributesUpdateV2Payload

  """
  Completes a checkout without providing payment information. You can use this
  mutation for free items or items whose purchase price is covered by a gift card.
  """
  checkoutCompleteFree(
    """
    The ID of the checkout.
    """
    checkoutId: ID!
  ): CheckoutCompleteFreePayload

  """
  Completes a checkout using a credit card token from Shopify's Vault.
  """
  checkoutCompleteWithCreditCard(
    """
    The ID of the checkout.
    """
    checkoutId: ID!

    """
    The credit card info to apply as a payment.
    """
    payment: CreditCardPaymentInput!
  ): CheckoutCompleteWithCreditCardPayload
    @deprecated(reason: "Use \`checkoutCompleteWithCreditCardV2\` instead")

  """
  Completes a checkout using a credit card token from Shopify's card vault.
  Before you can complete checkouts using CheckoutCompleteWithCreditCardV2, you
  need to  [_request payment processing_](https://help.shopify.com/api/guides/sales-channel-sdk/getting-started#request-payment-processing).
  """
  checkoutCompleteWithCreditCardV2(
    """
    The ID of the checkout.
    """
    checkoutId: ID!

    """
    The credit card info to apply as a payment.
    """
    payment: CreditCardPaymentInputV2!
  ): CheckoutCompleteWithCreditCardV2Payload

  """
  Completes a checkout with a tokenized payment.
  """
  checkoutCompleteWithTokenizedPayment(
    """
    The ID of the checkout.
    """
    checkoutId: ID!

    """
    The info to apply as a tokenized payment.
    """
    payment: TokenizedPaymentInput!
  ): CheckoutCompleteWithTokenizedPaymentPayload
    @deprecated(reason: "Use \`checkoutCompleteWithTokenizedPaymentV2\` instead")

  """
  Completes a checkout with a tokenized payment.
  """
  checkoutCompleteWithTokenizedPaymentV2(
    """
    The ID of the checkout.
    """
    checkoutId: ID!

    """
    The info to apply as a tokenized payment.
    """
    payment: TokenizedPaymentInputV2!
  ): CheckoutCompleteWithTokenizedPaymentV2Payload

  """
  Creates a new checkout.
  """
  checkoutCreate(input: CheckoutCreateInput!): CheckoutCreatePayload

  """
  Associates a customer to the checkout.
  """
  checkoutCustomerAssociate(
    """
    The ID of the checkout.
    """
    checkoutId: ID!

    """
    The customer access token of the customer to associate.
    """
    customerAccessToken: String!
  ): CheckoutCustomerAssociatePayload
    @deprecated(reason: "Use \`checkoutCustomerAssociateV2\` instead")

  """
  Associates a customer to the checkout.
  """
  checkoutCustomerAssociateV2(
    """
    The ID of the checkout.
    """
    checkoutId: ID!

    """
    The customer access token of the customer to associate.
    """
    customerAccessToken: String!
  ): CheckoutCustomerAssociateV2Payload

  """
  Disassociates the current checkout customer from the checkout.
  """
  checkoutCustomerDisassociate(
    """
    The ID of the checkout.
    """
    checkoutId: ID!
  ): CheckoutCustomerDisassociatePayload
    @deprecated(reason: "Use \`checkoutCustomerDisassociateV2\` instead")

  """
  Disassociates the current checkout customer from the checkout.
  """
  checkoutCustomerDisassociateV2(
    """
    The ID of the checkout.
    """
    checkoutId: ID!
  ): CheckoutCustomerDisassociateV2Payload

  """
  Applies a discount to an existing checkout using a discount code.
  """
  checkoutDiscountCodeApply(
    """
    The discount code to apply to the checkout.
    """
    discountCode: String!

    """
    The ID of the checkout.
    """
    checkoutId: ID!
  ): CheckoutDiscountCodeApplyPayload
    @deprecated(reason: "Use \`checkoutDiscountCodeApplyV2\` instead")

  """
  Applies a discount to an existing checkout using a discount code.
  """
  checkoutDiscountCodeApplyV2(
    """
    The discount code to apply to the checkout.
    """
    discountCode: String!

    """
    The ID of the checkout.
    """
    checkoutId: ID!
  ): CheckoutDiscountCodeApplyV2Payload

  """
  Removes the applied discount from an existing checkout.
  """
  checkoutDiscountCodeRemove(
    """
    The ID of the checkout.
    """
    checkoutId: ID!
  ): CheckoutDiscountCodeRemovePayload

  """
  Updates the email on an existing checkout.
  """
  checkoutEmailUpdate(
    """
    The ID of the checkout.
    """
    checkoutId: ID!

    """
    The email to update the checkout with.
    """
    email: String!
  ): CheckoutEmailUpdatePayload
    @deprecated(reason: "Use \`checkoutEmailUpdateV2\` instead")

  """
  Updates the email on an existing checkout.
  """
  checkoutEmailUpdateV2(
    """
    The ID of the checkout.
    """
    checkoutId: ID!

    """
    The email to update the checkout with.
    """
    email: String!
  ): CheckoutEmailUpdateV2Payload

  """
  Applies a gift card to an existing checkout using a gift card code. This will replace all currently applied gift cards.
  """
  checkoutGiftCardApply(
    """
    The code of the gift card to apply on the checkout.
    """
    giftCardCode: String!

    """
    The ID of the checkout.
    """
    checkoutId: ID!
  ): CheckoutGiftCardApplyPayload
    @deprecated(reason: "Use \`checkoutGiftCardsAppend\` instead")

  """
  Removes an applied gift card from the checkout.
  """
  checkoutGiftCardRemove(
    """
    The ID of the Applied Gift Card to remove from the Checkout.
    """
    appliedGiftCardId: ID!

    """
    The ID of the checkout.
    """
    checkoutId: ID!
  ): CheckoutGiftCardRemovePayload
    @deprecated(reason: "Use \`checkoutGiftCardRemoveV2\` instead")

  """
  Removes an applied gift card from the checkout.
  """
  checkoutGiftCardRemoveV2(
    """
    The ID of the Applied Gift Card to remove from the Checkout.
    """
    appliedGiftCardId: ID!

    """
    The ID of the checkout.
    """
    checkoutId: ID!
  ): CheckoutGiftCardRemoveV2Payload

  """
  Appends gift cards to an existing checkout.
  """
  checkoutGiftCardsAppend(
    """
    A list of gift card codes to append to the checkout.
    """
    giftCardCodes: [String!]!

    """
    The ID of the checkout.
    """
    checkoutId: ID!
  ): CheckoutGiftCardsAppendPayload

  """
  Adds a list of line items to a checkout.
  """
  checkoutLineItemsAdd(
    """
    A list of line item objects to add to the checkout.
    """
    lineItems: [CheckoutLineItemInput!]!

    """
    The ID of the checkout.
    """
    checkoutId: ID!
  ): CheckoutLineItemsAddPayload
    @deprecated(reason: "Use \`checkoutLineItemsReplace\` instead")

  """
  Removes line items from an existing checkout
  """
  checkoutLineItemsRemove(
    """
    the checkout on which to remove line items
    """
    checkoutId: ID!

    """
    line item ids to remove
    """
    lineItemIds: [ID!]!
  ): CheckoutLineItemsRemovePayload
    @deprecated(reason: "Use \`checkoutLineItemsReplace\` instead")

  """
  Sets a list of line items to a checkout.
  """
  checkoutLineItemsReplace(
    """
    A list of line item objects to set on the checkout.
    """
    lineItems: [CheckoutLineItemInput!]!

    """
    The ID of the checkout.
    """
    checkoutId: ID!
  ): CheckoutLineItemsReplacePayload

  """
  Updates line items on a checkout.
  """
  checkoutLineItemsUpdate(
    """
    the checkout on which to update line items.
    """
    checkoutId: ID!

    """
    line items to update.
    """
    lineItems: [CheckoutLineItemUpdateInput!]!
  ): CheckoutLineItemsUpdatePayload
    @deprecated(reason: "Use \`checkoutLineItemsReplace\` instead")

  """
  Updates the shipping address of an existing checkout.
  """
  checkoutShippingAddressUpdate(
    """
    The shipping address to where the line items will be shipped.
    """
    shippingAddress: MailingAddressInput!

    """
    The ID of the checkout.
    """
    checkoutId: ID!
  ): CheckoutShippingAddressUpdatePayload
    @deprecated(reason: "Use \`checkoutShippingAddressUpdateV2\` instead")

  """
  Updates the shipping address of an existing checkout.
  """
  checkoutShippingAddressUpdateV2(
    """
    The shipping address to where the line items will be shipped.
    """
    shippingAddress: MailingAddressInput!

    """
    The ID of the checkout.
    """
    checkoutId: ID!
  ): CheckoutShippingAddressUpdateV2Payload

  """
  Updates the shipping lines on an existing checkout.
  """
  checkoutShippingLineUpdate(
    """
    The ID of the checkout.
    """
    checkoutId: ID!

    """
    A unique identifier to a Checkout’s shipping provider, price, and title
    combination, enabling the customer to select the availableShippingRates.
    """
    shippingRateHandle: String!
  ): CheckoutShippingLineUpdatePayload

  """
  Creates a customer access token.
  The customer access token is required to modify the customer object in any way.
  """
  customerAccessTokenCreate(
    input: CustomerAccessTokenCreateInput!
  ): CustomerAccessTokenCreatePayload

  """
  Permanently destroys a customer access token.
  """
  customerAccessTokenDelete(
    """
    The access token used to identify the customer.
    """
    customerAccessToken: String!
  ): CustomerAccessTokenDeletePayload

  """
  Renews a customer access token.

  Access token renewal must happen *before* a token expires.
  If a token has already expired, a new one should be created instead via \`customerAccessTokenCreate\`.
  """
  customerAccessTokenRenew(
    """
    The access token used to identify the customer.
    """
    customerAccessToken: String!
  ): CustomerAccessTokenRenewPayload

  """
  Activates a customer.
  """
  customerActivate(
    """
    Specifies the customer to activate.
    """
    id: ID!
    input: CustomerActivateInput!
  ): CustomerActivatePayload

  """
  Creates a new address for a customer.
  """
  customerAddressCreate(
    """
    The access token used to identify the customer.
    """
    customerAccessToken: String!

    """
    The customer mailing address to create.
    """
    address: MailingAddressInput!
  ): CustomerAddressCreatePayload

  """
  Permanently deletes the address of an existing customer.
  """
  customerAddressDelete(
    """
    Specifies the address to delete.
    """
    id: ID!

    """
    The access token used to identify the customer.
    """
    customerAccessToken: String!
  ): CustomerAddressDeletePayload

  """
  Updates the address of an existing customer.
  """
  customerAddressUpdate(
    """
    The access token used to identify the customer.
    """
    customerAccessToken: String!

    """
    Specifies the customer address to update.
    """
    id: ID!

    """
    The customer’s mailing address.
    """
    address: MailingAddressInput!
  ): CustomerAddressUpdatePayload

  """
  Creates a new customer.
  """
  customerCreate(input: CustomerCreateInput!): CustomerCreatePayload

  """
  Updates the default address of an existing customer.
  """
  customerDefaultAddressUpdate(
    """
    The access token used to identify the customer.
    """
    customerAccessToken: String!

    """
    ID of the address to set as the new default for the customer.
    """
    addressId: ID!
  ): CustomerDefaultAddressUpdatePayload

  """
  Sends a reset password email to the customer, as the first step in the reset password process.
  """
  customerRecover(
    """
    The email address of the customer to recover.
    """
    email: String!
  ): CustomerRecoverPayload

  """
  Resets a customer’s password with a token received from \`CustomerRecover\`.
  """
  customerReset(
    """
    Specifies the customer to reset.
    """
    id: ID!
    input: CustomerResetInput!
  ): CustomerResetPayload

  """
  Resets a customer’s password with the reset password url received from \`CustomerRecover\`.
  """
  customerResetByUrl(
    """
    The customer's reset password url.
    """
    resetUrl: URL!

    """
    New password that will be set as part of the reset password process.
    """
    password: String!
  ): CustomerResetByUrlPayload

  """
  Updates an existing customer.
  """
  customerUpdate(
    """
    The access token used to identify the customer.
    """
    customerAccessToken: String!

    """
    The customer object input.
    """
    customer: CustomerUpdateInput!
  ): CustomerUpdatePayload
}

"""
An object with an ID to support global identification.
"""
interface Node {
  """
  Globally unique identifier.
  """
  id: ID!
}

"""
An order is a customer’s completed request to purchase one or more products from
a shop. An order is created when a customer completes the checkout process,
during which time they provides an email address, billing address and payment information.
"""
type Order implements Node {
  """
  The code of the currency used for the payment.
  """
  currencyCode: CurrencyCode!

  """
  The locale code in which this specific order happened.
  """
  customerLocale: String

  """
  The unique URL that the customer can use to access the order.
  """
  customerUrl: URL

  """
  Discounts that have been applied on the order.
  """
  discountApplications(
    """
    Page used in pagination
    """
    pageNumber: Int
    
    """
    Amount of items on a single page.
    """
    itemsPerPage: Int
    
    """
    Returns up to the first \`n\` elements from the list.
    """
    first: Int

    """
    Returns the elements that come after the specified cursor.
    """
    after: String

    """
    Returns up to the last \`n\` elements from the list.
    """
    last: Int

    """
    Returns the elements that come before the specified cursor.
    """
    before: String

    """
    Reverse the order of the underlying list.
    """
    reverse: Boolean = false
  ): DiscountApplicationConnection!

  """
  The customer's email address.
  """
  email: String

  """
  Globally unique identifier.
  """
  id: ID!

  """
  List of the order’s line items.
  """
  lineItems(
    """
    Page used in pagination
    """
    pageNumber: Int
    
    """
    Amount of items on a single page.
    """
    itemsPerPage: Int
    
    """
    Returns up to the first \`n\` elements from the list.
    """
    first: Int

    """
    Returns the elements that come after the specified cursor.
    """
    after: String

    """
    Returns up to the last \`n\` elements from the list.
    """
    last: Int

    """
    Returns the elements that come before the specified cursor.
    """
    before: String

    """
    Reverse the order of the underlying list.
    """
    reverse: Boolean = false
  ): OrderLineItemConnection!

  """
  Unique identifier for the order that appears on the order.
  For example, _#1000_ or _Store1001.
  """
  name: String!

  """
  A unique numeric identifier for the order for use by shop owner and customer.
  """
  orderNumber: Int!

  """
  The customer's phone number for receiving SMS notifications.
  """
  phone: String

  """
  The date and time when the order was imported.
  This value can be set to dates in the past when importing from other systems.
  If no value is provided, it will be auto-generated based on current date and time.
  """
  processedAt: DateTime!

  """
  The address to where the order will be shipped.
  """
  shippingAddress: MailingAddress

  """
  The discounts that have been allocated onto the shipping line by discount applications.
  """
  shippingDiscountAllocations: [DiscountAllocation!]!

  """
  The unique URL for the order's status page.
  """
  statusUrl: URL!

  """
  Price of the order before shipping and taxes.
  """
  subtotalPrice: Money @deprecated(reason: "Use \`subtotalPriceV2\` instead")

  """
  Price of the order before shipping and taxes.
  """
  subtotalPriceV2: MoneyV2

  """
  List of the order’s successful fulfillments.
  """
  successfulFulfillments(
    """
    Page used in pagination
    """
    pageNumber: Int
    
    """
    Amount of items on a single page.
    """
    itemsPerPage: Int
    
    """
    Truncate the array result to this size.
    """
    first: Int
  ): [Fulfillment!]

  """
  The sum of all the prices of all the items in the order, taxes and discounts included (must be positive).
  """
  totalPrice: Money! @deprecated(reason: "Use \`totalPriceV2\` instead")

  """
  The sum of all the prices of all the items in the order, taxes and discounts included (must be positive).
  """
  totalPriceV2: MoneyV2!

  """
  The total amount that has been refunded.
  """
  totalRefunded: Money! @deprecated(reason: "Use \`totalRefundedV2\` instead")

  """
  The total amount that has been refunded.
  """
  totalRefundedV2: MoneyV2!

  """
  The total cost of shipping.
  """
  totalShippingPrice: Money!
    @deprecated(reason: "Use \`totalShippingPriceV2\` instead")

  """
  The total cost of shipping.
  """
  totalShippingPriceV2: MoneyV2!

  """
  The total cost of taxes.
  """
  totalTax: Money @deprecated(reason: "Use \`totalTaxV2\` instead")

  """
  The total cost of taxes.
  """
  totalTaxV2: MoneyV2
}

type OrderConnection {
  """
  A list of edges.
  """
  edges: [OrderEdge!]!

  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
}

type OrderEdge {
  """
  A cursor for use in pagination.
  """
  cursor: String!

  """
  The item at the end of OrderEdge.
  """
  node: Order!
}

"""
Represents a single line in an order. There is one line item for each distinct product variant.
"""
type OrderLineItem {
  """
  List of custom attributes associated to the line item.
  """
  customAttributes: [Attribute!]!

  """
  The discounts that have been allocated onto the order line item by discount applications.
  """
  discountAllocations: [DiscountAllocation!]!

  """
  The number of products variants associated to the line item.
  """
  quantity: Int!

  """
  The title of the product combined with title of the variant.
  """
  title: String!

  """
  The product variant object associated to the line item.
  """
  variant: ProductVariant
}

type OrderLineItemConnection {
  """
  A list of edges.
  """
  edges: [OrderLineItemEdge!]!

  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
}

type OrderLineItemEdge {
  """
  A cursor for use in pagination.
  """
  cursor: String!

  """
  The item at the end of OrderLineItemEdge.
  """
  node: OrderLineItem!
}

"""
The set of valid sort keys for the orders query.
"""
enum OrderSortKeys {
  """
  Sort by the \`processed_at\` value.
  """
  PROCESSED_AT

  """
  Sort by the \`total_price\` value.
  """
  TOTAL_PRICE

  """
  Sort by the \`id\` value.
  """
  ID

  """
  During a search (i.e. when the \`query\` parameter has been specified on the connection) this sorts the
  results by relevance to the search term(s). When no search query is specified, this sort key is not
  deterministic and should not be used.
  """
  RELEVANCE
}

"""
Shopify merchants can create pages to hold static HTML content. Each Page object
represents a custom page on the online store.
"""
type Page implements Node {
  """
  The description of the page, complete with HTML formatting.
  """
  body: HTML!

  """
  Summary of the page body.
  """
  bodySummary: String!

  """
  The timestamp of the page creation.
  """
  createdAt: DateTime!

  """
  A human-friendly unique string for the page automatically generated from its title.
  """
  handle: String!

  """
  Globally unique identifier.
  """
  id: ID!

  """
  The title of the page.
  """
  title: String!

  """
  The timestamp of the latest page update.
  """
  updatedAt: DateTime!

  """
  The url pointing to the page accessible from the web.
  """
  url: URL!
}

type PageConnection {
  """
  A list of edges.
  """
  edges: [PageEdge!]!

  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
}

type PageEdge {
  """
  A cursor for use in pagination.
  """
  cursor: String!

  """
  The item at the end of PageEdge.
  """
  node: Page!
}

"""
Information about pagination in a connection.
"""
type PageInfo {
  """
  Indicates if there are more pages to fetch.
  """
  hasNextPage: Boolean!

  """
  Indicates if there are any pages prior to the current page.
  """
  hasPreviousPage: Boolean!
}

"""
The set of valid sort keys for the pages query.
"""
enum PageSortKeys {
  """
  Sort by the \`title\` value.
  """
  TITLE

  """
  Sort by the \`updated_at\` value.
  """
  UPDATED_AT

  """
  Sort by the \`id\` value.
  """
  ID

  """
  During a search (i.e. when the \`query\` parameter has been specified on the connection) this sorts the
  results by relevance to the search term(s). When no search query is specified, this sort key is not
  deterministic and should not be used.
  """
  RELEVANCE
}

"""
A payment applied to a checkout.
"""
type Payment implements Node {
  """
  The amount of the payment.
  """
  amount: Money! @deprecated(reason: "Use \`amountV2\` instead")

  """
  The amount of the payment.
  """
  amountV2: MoneyV2!

  """
  The billing address for the payment.
  """
  billingAddress: MailingAddress

  """
  The checkout to which the payment belongs.
  """
  checkout: Checkout!

  """
  The credit card used for the payment in the case of direct payments.
  """
  creditCard: CreditCard

  """
  An message describing a processing error during asynchronous processing.
  """
  errorMessage: String

  """
  Globally unique identifier.
  """
  id: ID!

  """
  A client-side generated token to identify a payment and perform idempotent operations.
  """
  idempotencyKey: String

  """
  Whether or not the payment is still processing asynchronously.
  """
  ready: Boolean!

  """
  A flag to indicate if the payment is to be done in test mode for gateways that support it.
  """
  test: Boolean!

  """
  The actual transaction recorded by Shopify after having processed the payment with the gateway.
  """
  transaction: Transaction
}

"""
Settings related to payments.
"""
type PaymentSettings {
  """
  List of the card brands which the shop accepts.
  """
  acceptedCardBrands: [CardBrand!]!

  """
  The url pointing to the endpoint to vault credit cards.
  """
  cardVaultUrl: URL!

  """
  The country where the shop is located.
  """
  countryCode: CountryCode!

  """
  The three-letter code for the shop's primary currency.
  """
  currencyCode: CurrencyCode!

  """
  A list of enabled currencies (ISO 4217 format) that the shop accepts.
  Merchants can enable currencies from their Shopify Payments settings in the Shopify admin.
  """
  enabledPresentmentCurrencies: [CurrencyCode!]!

  """
  The shop’s Shopify Payments account id.
  """
  shopifyPaymentsAccountId: String

  """
  List of the digital wallets which the shop supports.
  """
  supportedDigitalWallets: [DigitalWallet!]!
}

"""
The value of the percentage pricing object.
"""
type PricingPercentageValue {
  """
  The percentage value of the object.
  """
  percentage: Float!
}

"""
The price value (fixed or percentage) for a discount application.
"""
union PricingValue = PricingPercentageValue | MoneyV2

"""
A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
For example, a digital download (such as a movie, music or ebook file) also
qualifies as a product, as do services (such as equipment rental, work for hire,
customization of another product or an extended warranty).
"""
type Product implements Node {
  """
  Whether the product is available on the Online Store channel and in stock.
  """
  availableForSale: Boolean!

  """
  List of collections a product belongs to.
  """
  collections(
    """
    Page used in pagination
    """
    pageNumber: Int
    
    """
    Amount of items on a single page.
    """
    itemsPerPage: Int
    
    """
    Returns up to the first \`n\` elements from the list.
    """
    first: Int

    """
    Returns the elements that come after the specified cursor.
    """
    after: String

    """
    Returns up to the last \`n\` elements from the list.
    """
    last: Int

    """
    Returns the elements that come before the specified cursor.
    """
    before: String

    """
    Reverse the order of the underlying list.
    """
    reverse: Boolean = false
  ): CollectionConnection!

  """
  The date and time when the product was created.
  """
  createdAt: DateTime!

  """
  Stripped description of the product, single line with HTML tags removed.
  """
  description(
    """
    Truncates string after the given length.
    """
    truncateAt: Int
  ): String!

  #  """
  #  The description of the product, complete with HTML formatting.
  #  """
  #  descriptionHtml: HTML!

  """
  A human-friendly unique string for the Product automatically generated from its title.
  They are used by the Liquid templating language to refer to objects.
  """
  handle: String!

  """
  Globally unique identifier.
  """
  id: ID!

  """
  List of images associated with the product.
  """
  images(
    #    """
    #    Image width in pixels between 1 and 2048. This argument is deprecated: Use \`maxWidth\` on \`Image.transformedSrc\` instead.
    #    """
    #    maxWidth: Int
    #
    #    """
    #    Image height in pixels between 1 and 2048. This argument is deprecated: Use
    #    \`maxHeight\` on \`Image.transformedSrc\` instead.
    #    """
    #    maxHeight: Int
    #
    #    """
    #    Crops the image according to the specified region. This argument is
    #    deprecated: Use \`crop\` on \`Image.transformedSrc\` instead.
    #    """
    #    crop: CropRegion
    #
    #    """
    #    Image size multiplier for high-resolution retina displays. Must be between 1
    #    and 3. This argument is deprecated: Use \`scale\` on \`Image.transformedSrc\` instead.
    #    """
    #    scale: Int = 1

    """
    Page used in pagination
    """
    pageNumber: Int
    
    """
    Amount of items on a single page.
    """
    itemsPerPage: Int
    
    """
    Returns up to the first \`n\` elements from the list.
    """
    first: Int

    """
    Returns the elements that come after the specified cursor.
    """
    after: String

    """
    Returns up to the last \`n\` elements from the list.
    """
    last: Int

    """
    Returns the elements that come before the specified cursor.
    """
    before: String

    """
    Reverse the order of the underlying list.
    """
    reverse: Boolean = false

    """
    Sort the underlying list by the given key.
    """
    sortKey: ProductImageSortKeys = POSITION
  ): ImageConnection!

  #  """
  #  The metafield associated with the resource.
  #  """
  #  metafield(
  #    """
  #    Container for a set of metafields (maximum of 20 characters).
  #    """
  #    namespace: String!
  #
  #    """
  #    Identifier for the metafield (maximum of 30 characters).
  #    """
  #    key: String!
  #  ): Metafield
  #
  #  """
  #  A paginated list of metafields associated with the resource.
  #  """
  #  metafields(
  #    """
  #    Container for a set of metafields (maximum of 20 characters).
  #    """
  #    namespace: String
  #
  #    """
  #    Returns up to the first \`n\` elements from the list.
  #    """
  #    first: Int
  #
  #    """
  #    Returns the elements that come after the specified cursor.
  #    """
  #    after: String
  #
  #    """
  #    Returns up to the last \`n\` elements from the list.
  #    """
  #    last: Int
  #
  #    """
  #    Returns the elements that come before the specified cursor.
  #    """
  #    before: String
  #
  #    """
  #    Reverse the order of the underlying list.
  #    """
  #    reverse: Boolean = false
  #  ): MetafieldConnection!
  #
  #  """
  #  The online store URL for the product.
  #  A value of \`null\` indicates that the product is not published to the Online Store sales channel.
  #  """
  #  onlineStoreUrl: URL

  """
  List of custom product options (maximum of 3 per product).
  """
  options(
    """
    Page used in pagination
    """
    pageNumber: Int
    
    """
    Amount of items on a single page.
    """
    itemsPerPage: Int
    
    """
    Truncate the array result to this size.
    """
    first: Int
  ): [ProductOption!]!

  #  """
  #  List of price ranges in the presentment currencies for this shop.
  #  """
  #  presentmentPriceRanges(
  #    """
  #    Specifies the presentment currencies to return a price range in.
  #    """
  #    presentmentCurrencies: [CurrencyCode!]
  #
  #    """
  #    Returns up to the first \`n\` elements from the list.
  #    """
  #    first: Int
  #
  #    """
  #    Returns the elements that come after the specified cursor.
  #    """
  #    after: String
  #
  #    """
  #    Returns up to the last \`n\` elements from the list.
  #    """
  #    last: Int
  #
  #    """
  #    Returns the elements that come before the specified cursor.
  #    """
  #    before: String
  #
  #    """
  #    Reverse the order of the underlying list.
  #    """
  #    reverse: Boolean = false
  #  ): ProductPriceRangeConnection!
  #
  #  """
  #  The price range.
  #  """
  #  priceRange: ProductPriceRange!

  #  """
  #  A categorization that a product can be tagged with, commonly used for filtering and searching.
  #  """
  #  productType: String!

  #  """
  #  The date and time when the product was published to the channel.
  #  """
  #  publishedAt: DateTime!

  """
  A categorization that a product can be tagged with, commonly used for filtering and searching.
  Additional access scope required for private apps: unauthenticated_read_product_tags.
  """
  tags: [String!]!

  """
  The product’s title.
  """
  title: String!

  #  """
  #  The date and time when the product was last modified.
  #  """
  #  updatedAt: DateTime!

  #  """
  #  Find a product’s variant based on its selected options.
  #  This is useful for converting a user’s selection of product options into a single matching variant.
  #  If there is not a variant for the selected options, \`null\` will be returned.
  #  """
  #  variantBySelectedOptions(
  #    selectedOptions: [SelectedOptionInput!]!
  #  ): ProductVariant

  """
  List of the product’s variants.
  """
  variants(
    """
    Page used in pagination
    """
    pageNumber: Int
    
    """
    Amount of items on a single page.
    """
    itemsPerPage: Int
    
    """
    Returns up to the first \`n\` elements from the list.
    """
    first: Int

    """
    Returns the elements that come after the specified cursor.
    """
    after: String

    """
    Returns up to the last \`n\` elements from the list.
    """
    last: Int

    """
    Returns the elements that come before the specified cursor.
    """
    before: String

    """
    Reverse the order of the underlying list.
    """
    reverse: Boolean = false

    """
    Sort the underlying list by the given key.
    """
    sortKey: ProductVariantSortKeys = POSITION
  ): ProductVariantConnection!

  #  """
  #  The product’s vendor name.
  #  """
  #  vendor: String!
}

"""
The set of valid sort keys for the products query.
"""
enum ProductCollectionSortKeys {
  """
  Sort by the \`title\` value.
  """
  TITLE

  """
  Sort by the \`price\` value.
  """
  PRICE

  """
  Sort by the \`best-selling\` value.
  """
  BEST_SELLING

  """
  Sort by the \`created\` value.
  """
  CREATED

  """
  Sort by the \`id\` value.
  """
  ID

  """
  Sort by the \`manual\` value.
  """
  MANUAL

  """
  Sort by the \`collection-default\` value.
  """
  COLLECTION_DEFAULT

  """
  During a search (i.e. when the \`query\` parameter has been specified on the connection) this sorts the
  results by relevance to the search term(s). When no search query is specified, this sort key is not
  deterministic and should not be used.
  """
  RELEVANCE
}

type ProductConnection {
  
  """
  A list of edges.
  """
  edges: [ProductEdge!]!

  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
}

type ProductEdge {
  """
  A cursor for use in pagination.
  """
  cursor: String!

  """
  The item at the end of ProductEdge.
  """
  node: Product!
}

"""
The set of valid sort keys for the images query.
"""
enum ProductImageSortKeys {
  """
  Sort by the \`created_at\` value.
  """
  CREATED_AT

  """
  Sort by the \`position\` value.
  """
  POSITION

  """
  Sort by the \`id\` value.
  """
  ID

  """
  During a search (i.e. when the \`query\` parameter has been specified on the connection) this sorts the
  results by relevance to the search term(s). When no search query is specified, this sort key is not
  deterministic and should not be used.
  """
  RELEVANCE
}

"""
Custom product property names like "Size", "Color", and "Material".
Products are based on permutations of these options.
A product may have a maximum of 3 options.
255 characters limit each.
"""
type ProductOption implements Node {
  """
  Globally unique identifier.
  """
  id: ID!

  """
  The product option’s name.
  """
  name: String!

  """
  The corresponding value to the product option name.
  """
  values: [String!]!
}

"""
The price range of the product.
"""
type ProductPriceRange {
  """
  The highest variant's price.
  """
  maxVariantPrice: MoneyV2!

  """
  The lowest variant's price.
  """
  minVariantPrice: MoneyV2!
}

type ProductPriceRangeConnection {
  """
  A list of edges.
  """
  edges: [ProductPriceRangeEdge!]!

  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
}

type ProductPriceRangeEdge {
  """
  A cursor for use in pagination.
  """
  cursor: String!

  """
  The item at the end of ProductPriceRangeEdge.
  """
  node: ProductPriceRange!
}

"""
The set of valid sort keys for the products query.
"""
enum ProductSortKeys {
  """
  Sort by the \`title\` value.
  """
  TITLE

  """
  Sort by the \`product_type\` value.
  """
  PRODUCT_TYPE

  """
  Sort by the \`vendor\` value.
  """
  VENDOR

  """
  Sort by the \`updated_at\` value.
  """
  UPDATED_AT

  """
  Sort by the \`created_at\` value.
  """
  CREATED_AT

  """
  Sort by the \`best_selling\` value.
  """
  BEST_SELLING

  """
  Sort by the \`price\` value.
  """
  PRICE

  """
  Sort by the \`id\` value.
  """
  ID

  """
  During a search (i.e. when the \`query\` parameter has been specified on the connection) this sorts the
  results by relevance to the search term(s). When no search query is specified, this sort key is not
  deterministic and should not be used.
  """
  RELEVANCE
}

"""
A product variant represents a different version of a product, such as differing sizes or differing colors.
"""
type ProductVariant implements Node {
  #  """
  #  Indicates if the product variant is in stock.
  #  """
  #  available: Boolean @deprecated(reason: "Use \`availableForSale\` instead")

  """
  Indicates if the product variant is available for sale.
  """
  availableForSale: Boolean!

  #  """
  #  The compare at price of the variant. This can be used to mark a variant as on
  #  sale, when \`compareAtPrice\` is higher than \`price\`.
  #  """
  #  compareAtPrice: Money @deprecated(reason: "Use \`compareAtPriceV2\` instead")

  """
  The compare at price of the variant. This can be used to mark a variant as on
  sale, when \`compareAtPriceV2\` is higher than \`priceV2\`.
  """
  compareAtPrice: Money

  """
  Globally unique identifier.
  """
  id: ID!

  """
  Image associated with the product variant. This field falls back to the product image if no image is available.
  """
  image: Image
  #  image(
  #    """
  #    Image width in pixels between 1 and 2048. This argument is deprecated: Use \`maxWidth\` on \`Image.transformedSrc\` instead.
  #    """
  #    maxWidth: Int
  #
  #    """
  #    Image height in pixels between 1 and 2048. This argument is deprecated: Use
  #    \`maxHeight\` on \`Image.transformedSrc\` instead.
  #    """
  #    maxHeight: Int
  #
  #    """
  #    Crops the image according to the specified region. This argument is
  #    deprecated: Use \`crop\` on \`Image.transformedSrc\` instead.
  #    """
  #    crop: CropRegion
  #
  #    """
  #    Image size multiplier for high-resolution retina displays. Must be between 1
  #    and 3. This argument is deprecated: Use \`scale\` on \`Image.transformedSrc\` instead.
  #    """
  #    scale: Int = 1
  #  ): Image
  #
  #  """
  #  The metafield associated with the resource.
  #  """
  #  metafield(
  #    """
  #    Container for a set of metafields (maximum of 20 characters).
  #    """
  #    namespace: String!
  #
  #    """
  #    Identifier for the metafield (maximum of 30 characters).
  #    """
  #    key: String!
  #  ): Metafield
  #
  #  """
  #  A paginated list of metafields associated with the resource.
  #  """
  #  metafields(
  #    """
  #    Container for a set of metafields (maximum of 20 characters).
  #    """
  #    namespace: String
  #
  #    """
  #    Returns up to the first \`n\` elements from the list.
  #    """
  #    first: Int
  #
  #    """
  #    Returns the elements that come after the specified cursor.
  #    """
  #    after: String
  #
  #    """
  #    Returns up to the last \`n\` elements from the list.
  #    """
  #    last: Int
  #
  #    """
  #    Returns the elements that come before the specified cursor.
  #    """
  #    before: String
  #
  #    """
  #    Reverse the order of the underlying list.
  #    """
  #    reverse: Boolean = false
  #  ): MetafieldConnection!

  #  """
  #  List of prices and compare-at prices in the presentment currencies for this shop.
  #  """
  #  presentmentPrices(
  #    """
  #    The presentment currencies prices should return in.
  #    """
  #    presentmentCurrencies: [CurrencyCode!]
  #
  #    """
  #    Returns up to the first \`n\` elements from the list.
  #    """
  #    first: Int
  #
  #    """
  #    Returns the elements that come after the specified cursor.
  #    """
  #    after: String
  #
  #    """
  #    Returns up to the last \`n\` elements from the list.
  #    """
  #    last: Int
  #
  #    """
  #    Returns the elements that come before the specified cursor.
  #    """
  #    before: String
  #
  #    """
  #    Reverse the order of the underlying list.
  #    """
  #    reverse: Boolean = false
  #  ): ProductVariantPricePairConnection!
  #
  #  """
  #  The product variant’s price.
  #  """
  #  price: Money! @deprecated(reason: "Use \`priceV2\` instead")

  """
  The product variant’s price.
  """
  price: Money!

  """
  The product object that the product variant belongs to.
  """
  product: Product!

  #  """
  #  Whether a customer needs to provide a shipping address when placing an order for the product variant.
  #  """
  #  requiresShipping: Boolean!

  """
  List of product options applied to the variant.
  """
  selectedOptions: [SelectedOption!]!

  """
  The SKU (stock keeping unit) associated with the variant.
  """
  sku: String

  """
  The product variant’s title.
  """
  title: String!

  #  """
  #  The weight of the product variant in the unit system specified with \`weight_unit\`.
  #  """
  #  weight: Float
  #
  #  """
  #  Unit of measurement for weight.
  #  """
  #  weightUnit: WeightUnit!
}

type ProductVariantConnection {
  """
  A list of edges.
  """
  edges: [ProductVariantEdge!]!

  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
}

type ProductVariantEdge {
  """
  A cursor for use in pagination.
  """
  cursor: String!

  """
  The item at the end of ProductVariantEdge.
  """
  node: ProductVariant!
}

"""
The compare-at price and price of a variant sharing a currency.
"""
type ProductVariantPricePair {
  """
  The compare-at price of the variant with associated currency.
  """
  compareAtPrice: MoneyV2

  """
  The price of the variant with associated currency.
  """
  price: MoneyV2!
}

type ProductVariantPricePairConnection {
  """
  A list of edges.
  """
  edges: [ProductVariantPricePairEdge!]!

  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
}

type ProductVariantPricePairEdge {
  """
  A cursor for use in pagination.
  """
  cursor: String!

  """
  The item at the end of ProductVariantPricePairEdge.
  """
  node: ProductVariantPricePair!
}

"""
The set of valid sort keys for the variants query.
"""
enum ProductVariantSortKeys {
  """
  Sort by the \`title\` value.
  """
  TITLE

  """
  Sort by the \`sku\` value.
  """
  SKU

  """
  Sort by the \`position\` value.
  """
  POSITION

  """
  Sort by the \`id\` value.
  """
  ID

  """
  During a search (i.e. when the \`query\` parameter has been specified on the connection) this sorts the
  results by relevance to the search term(s). When no search query is specified, this sort key is not
  deterministic and should not be used.
  """
  RELEVANCE
}

"""
The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start.
"""
type QueryRoot {
  #  """
  #  List of the shop's articles.
  #  """
  #  articles(
  #    """
  #    Returns up to the first \`n\` elements from the list.
  #    """
  #    first: Int
  #
  #    """
  #    Returns the elements that come after the specified cursor.
  #    """
  #    after: String
  #
  #    """
  #    Returns up to the last \`n\` elements from the list.
  #    """
  #    last: Int
  #
  #    """
  #    Returns the elements that come before the specified cursor.
  #    """
  #    before: String
  #
  #    """
  #    Reverse the order of the underlying list.
  #    """
  #    reverse: Boolean = false
  #
  #    """
  #    Sort the underlying list by the given key.
  #    """
  #    sortKey: ArticleSortKeys = ID
  #
  #    """
  #    Supported filter parameters:
  #     - \`author\`
  #     - \`blog_title\`
  #     - \`created_at\`
  #     - \`tag\`
  #     - \`updated_at\`
  #
  #    See the detailed [search syntax](https://help.shopify.com/api/getting-started/search-syntax).
  #    """
  #    query: String
  #  ): ArticleConnection!
  #
  #  """
  #  Find a blog by its handle.
  #  """
  #  blogByHandle(
  #    """
  #    The handle of the blog.
  #    """
  #    handle: String!
  #  ): Blog
  #
  #  """
  #  List of the shop's blogs.
  #  """
  #  blogs(
  #    """
  #    Returns up to the first \`n\` elements from the list.
  #    """
  #    first: Int
  #
  #    """
  #    Returns the elements that come after the specified cursor.
  #    """
  #    after: String
  #
  #    """
  #    Returns up to the last \`n\` elements from the list.
  #    """
  #    last: Int
  #
  #    """
  #    Returns the elements that come before the specified cursor.
  #    """
  #    before: String
  #
  #    """
  #    Reverse the order of the underlying list.
  #    """
  #    reverse: Boolean = false
  #
  #    """
  #    Sort the underlying list by the given key.
  #    """
  #    sortKey: BlogSortKeys = ID
  #
  #    """
  #    Supported filter parameters:
  #     - \`created_at\`
  #     - \`handle\`
  #     - \`title\`
  #     - \`updated_at\`
  #
  #    See the detailed [search syntax](https://help.shopify.com/api/getting-started/search-syntax).
  #    """
  #    query: String
  #  ): BlogConnection!

  """
  Find a collection by its handle.
  """
  collectionByHandle(
    """
    The handle of the collection.
    """
    handle: String!
  ): Collection

  """
  List of the shop’s collections.
  """
  collections(
    """
    Page used in pagination
    """
    pageNumber: Int
    
    """
    Amount of items on a single page.
    """
    itemsPerPage: Int
    
    """
    Returns up to the first \`n\` elements from the list.
    """
    first: Int

    """
    Returns the elements that come after the specified cursor.
    """
    after: String

    """
    Returns up to the last \`n\` elements from the list.
    """
    last: Int

    """
    Returns the elements that come before the specified cursor.
    """
    before: String

    """
    Reverse the order of the underlying list.
    """
    reverse: Boolean = false

    """
    Sort the underlying list by the given key.
    """
    sortKey: CollectionSortKeys = ID

    """
    Supported filter parameters:
     - \`collection_type\`
     - \`title\`
     - \`updated_at\`

    See the detailed [search syntax](https://help.shopify.com/api/getting-started/search-syntax).
    """
    query: String
  ): CollectionConnection!

  checkout(
    """
    Checkout id.
    """
    id: ID!
  ): Checkout

  #    customer(
  #      """
  #      The customer access token
  #      """
  #      customerAccessToken: String!
  #    ): Customer
  #    node(
  #      """
  #      The ID of the Node to return.
  #      """
  #      id: ID!
  #    ): Node
  #    nodes(
  #      """
  #      The IDs of the Nodes to return.
  #      """
  #      ids: [ID!]!
  #    ): [Node]!
  #
  #  """
  #  Find a page by its handle.
  #  """
  #  pageByHandle(
  #    """
  #    The handle of the page.
  #    """
  #    handle: String!
  #  ): Page

  #  """
  #  List of the shop's pages.
  #  """
  #  pages(
  #    """
  #    Returns up to the first \`n\` elements from the list.
  #    """
  #    first: Int
  #
  #    """
  #    Returns the elements that come after the specified cursor.
  #    """
  #    after: String
  #
  #    """
  #    Returns up to the last \`n\` elements from the list.
  #    """
  #    last: Int
  #
  #    """
  #    Returns the elements that come before the specified cursor.
  #    """
  #    before: String
  #
  #    """
  #    Reverse the order of the underlying list.
  #    """
  #    reverse: Boolean = false
  #
  #    """
  #    Sort the underlying list by the given key.
  #    """
  #    sortKey: PageSortKeys = ID
  #
  #    """
  #    Supported filter parameters:
  #     - \`created_at\`
  #     - \`handle\`
  #     - \`title\`
  #     - \`updated_at\`
  #
  #    See the detailed [search syntax](https://help.shopify.com/api/getting-started/search-syntax).
  #    """
  #    query: String
  #  ): PageConnection!

  """
  Find a product by its handle.
  """
  productByHandle(
    """
    The handle of the product.
    """
    handle: String!
  ): Product

  #  """
  #  Find recommended products related to a given \`product_id\`.
  #  To learn more about how recommendations are generated, see
  #  [*Showing product recommendations on product pages*](https://help.shopify.com/themes/development/recommended-products).
  #  """
  #  productRecommendations(
  #    """
  #    The id of the product.
  #    """
  #    productId: ID!
  #  ): [Product!]

  #  """
  #  Tags added to products.
  #  Additional access scope required: unauthenticated_read_product_tags.
  #  """
  #  productTags(
  #    """
  #    Returns up to the first \`n\` elements from the list.
  #    """
  #    first: Int!
  #  ): StringConnection!
  #
  #  """
  #  List of product types for the shop's products that are published to your app.
  #  """
  #  productTypes(
  #    """
  #    Returns up to the first \`n\` elements from the list.
  #    """
  #    first: Int!
  #  ): StringConnection!

  """
  List of the shop’s products.
  """
  products(
    """
    Page used in pagination
    """
    pageNumber: Int
    
    """
    Amount of items on a single page.
    """
    itemsPerPage: Int

    """
    Returns up to the first \`n\` elements from the list.
    """
    first: Int

    """
    Returns the elements that come after the specified cursor.
    """
    after: String

    """
    Returns up to the last \`n\` elements from the list.
    """
    last: Int

    """
    Returns the elements that come before the specified cursor.
    """
    before: String

    """
    Reverse the order of the underlying list.
    """
    reverse: Boolean = false

    """
    Sort the underlying list by the given key.
    """
    sortKey: ProductSortKeys = ID

    """
    Supported filter parameters:
     - \`available_for_sale\`
     - \`created_at\`
     - \`product_type\`
     - \`tag\`
     - \`title\`
     - \`updated_at\`
     - \`variants.price\`
     - \`vendor\`

    See the detailed [search syntax](https://help.shopify.com/api/getting-started/search-syntax).
    """
    query: String
  ): ProductConnection!

  #  """
  #  The list of public Storefront API versions, including supported, release candidate and unstable versions.
  #  """
  #  publicApiVersions: [ApiVersion!]!
  #  shop: Shop!
}

"""
Script discount applications capture the intentions of a discount that
was created by a Shopify Script.
"""
type ScriptDiscountApplication implements DiscountApplication {
  """
  The method by which the discount's value is allocated to its entitled items.
  """
  allocationMethod: DiscountApplicationAllocationMethod!

  """
  The description of the application as defined by the Script.
  """
  description: String! @deprecated(reason: "Use \`title\` instead")

  """
  Which lines of targetType that the discount is allocated over.
  """
  targetSelection: DiscountApplicationTargetSelection!

  """
  The type of line that the discount is applicable towards.
  """
  targetType: DiscountApplicationTargetType!

  """
  The title of the application as defined by the Script.
  """
  title: String!

  """
  The value of the discount application.
  """
  value: PricingValue!
}

"""
Custom properties that a shop owner can use to define product variants.
Multiple options can exist. Options are represented as: option1, option2, option3, etc.
"""
type SelectedOption {
  """
  The product option’s name.
  """
  name: String!

  """
  The product option’s value.
  """
  value: String!
}

"""
Specifies the input fields required for a selected option.
"""
input SelectedOptionInput {
  """
  The product option’s name.
  """
  name: String!

  """
  The product option’s value.
  """
  value: String!
}

"""
SEO information.
"""
type SEO {
  """
  The meta description.
  """
  description: String

  """
  The SEO title.
  """
  title: String
}

"""
A shipping rate to be applied to a checkout.
"""
type ShippingRate {
  """
  Human-readable unique identifier for this shipping rate.
  """
  handle: String!

  """
  Price of this shipping rate.
  """
  price: Money! @deprecated(reason: "Use \`priceV2\` instead")

  """
  Price of this shipping rate.
  """
  priceV2: MoneyV2!

  """
  Title of this shipping rate.
  """
  title: String!
}
#
#"""
#Shop represents a collection of the general settings and information about the shop.
#"""
#type Shop {
#  """
#  List of the shop' articles.
#  """
#  articles(
#    """
#    Returns up to the first \`n\` elements from the list.
#    """
#    first: Int
#
#    """
#    Returns the elements that come after the specified cursor.
#    """
#    after: String
#
#    """
#    Returns up to the last \`n\` elements from the list.
#    """
#    last: Int
#
#    """
#    Returns the elements that come before the specified cursor.
#    """
#    before: String
#
#    """
#    Reverse the order of the underlying list.
#    """
#    reverse: Boolean = false
#
#    """
#    Sort the underlying list by the given key.
#    """
#    sortKey: ArticleSortKeys = ID
#
#    """
#    Supported filter parameters:
#     - \`author\`
#     - \`blog_title\`
#     - \`created_at\`
#     - \`tag\`
#     - \`updated_at\`
#
#    See the detailed [search syntax](https://help.shopify.com/api/getting-started/search-syntax).
#    """
#    query: String
#  ): ArticleConnection! @deprecated(reason: "Use \`QueryRoot.articles\` instead.")
#
#  """
#  List of the shop' blogs.
#  """
#  blogs(
#    """
#    Returns up to the first \`n\` elements from the list.
#    """
#    first: Int
#
#    """
#    Returns the elements that come after the specified cursor.
#    """
#    after: String
#
#    """
#    Returns up to the last \`n\` elements from the list.
#    """
#    last: Int
#
#    """
#    Returns the elements that come before the specified cursor.
#    """
#    before: String
#
#    """
#    Reverse the order of the underlying list.
#    """
#    reverse: Boolean = false
#
#    """
#    Sort the underlying list by the given key.
#    """
#    sortKey: BlogSortKeys = ID
#
#    """
#    Supported filter parameters:
#     - \`created_at\`
#     - \`handle\`
#     - \`title\`
#     - \`updated_at\`
#
#    See the detailed [search syntax](https://help.shopify.com/api/getting-started/search-syntax).
#    """
#    query: String
#  ): BlogConnection! @deprecated(reason: "Use \`QueryRoot.blogs\` instead.")
#
#  """
#  Find a collection by its handle.
#  """
#  collectionByHandle(
#    """
#    The handle of the collection.
#    """
#    handle: String!
#  ): Collection
#    @deprecated(reason: "Use \`QueryRoot.collectionByHandle\` instead.")
#
#  """
#  List of the shop’s collections.
#  """
#  collections(
#    """
#    Returns up to the first \`n\` elements from the list.
#    """
#    first: Int
#
#    """
#    Returns the elements that come after the specified cursor.
#    """
#    after: String
#
#    """
#    Returns up to the last \`n\` elements from the list.
#    """
#    last: Int
#
#    """
#    Returns the elements that come before the specified cursor.
#    """
#    before: String
#
#    """
#    Reverse the order of the underlying list.
#    """
#    reverse: Boolean = false
#
#    """
#    Sort the underlying list by the given key.
#    """
#    sortKey: CollectionSortKeys = ID
#
#    """
#    Supported filter parameters:
#     - \`collection_type\`
#     - \`title\`
#     - \`updated_at\`
#
#    See the detailed [search syntax](https://help.shopify.com/api/getting-started/search-syntax).
#    """
#    query: String
#  ): CollectionConnection!
#    @deprecated(reason: "Use \`QueryRoot.collections\` instead.")
#
#  """
#  The three-letter code for the currency that the shop accepts.
#  """
#  currencyCode: CurrencyCode!
#    @deprecated(reason: "Use \`paymentSettings\` instead")
#
#  """
#  A description of the shop.
#  """
#  description: String
#
#  """
#  A string representing the way currency is formatted when the currency isn’t specified.
#  """
#  moneyFormat: String!
#
#  """
#  The shop’s name.
#  """
#  name: String!
#
#  """
#  Settings related to payments.
#  """
#  paymentSettings: PaymentSettings!
#
#  """
#  The shop’s primary domain.
#  """
#  primaryDomain: Domain!
#
#  """
#  The shop’s privacy policy.
#  """
#  privacyPolicy: ShopPolicy
#
#  """
#  Find a product by its handle.
#  """
#  productByHandle(
#    """
#    The handle of the product.
#    """
#    handle: String!
#  ): Product @deprecated(reason: "Use \`QueryRoot.productByHandle\` instead.")
#
#  """
#  Tags added to products.
#  Additional access scope required: unauthenticated_read_product_tags.
#  """
#  productTags(
#    """
#    Returns up to the first \`n\` elements from the list.
#    """
#    first: Int!
#  ): StringConnection!
#    @deprecated(reason: "Use \`QueryRoot.productTags\` instead.")
#
#  """
#  List of the shop’s product types.
#  """
#  productTypes(
#    """
#    Returns up to the first \`n\` elements from the list.
#    """
#    first: Int!
#  ): StringConnection!
#    @deprecated(reason: "Use \`QueryRoot.productTypes\` instead.")
#
#  """
#  List of the shop’s products.
#  """
#  products(
#    """
#    Returns up to the first \`n\` elements from the list.
#    """
#    first: Int
#
#    """
#    Returns the elements that come after the specified cursor.
#    """
#    after: String
#
#    """
#    Returns up to the last \`n\` elements from the list.
#    """
#    last: Int
#
#    """
#    Returns the elements that come before the specified cursor.
#    """
#    before: String
#
#    """
#    Reverse the order of the underlying list.
#    """
#    reverse: Boolean = false
#
#    """
#    Sort the underlying list by the given key.
#    """
#    sortKey: ProductSortKeys = ID
#
#    """
#    Supported filter parameters:
#     - \`available_for_sale\`
#     - \`created_at\`
#     - \`product_type\`
#     - \`tag\`
#     - \`title\`
#     - \`updated_at\`
#     - \`variants.price\`
#     - \`vendor\`
#
#    See the detailed [search syntax](https://help.shopify.com/api/getting-started/search-syntax).
#    """
#    query: String
#  ): ProductConnection! @deprecated(reason: "Use \`QueryRoot.products\` instead.")
#
#  """
#  The shop’s refund policy.
#  """
#  refundPolicy: ShopPolicy
#
#  """
#  Countries that the shop ships to.
#  """
#  shipsToCountries: [CountryCode!]!
#
#  """
#  The shop’s Shopify Payments account id.
#  """
#  shopifyPaymentsAccountId: String
#    @deprecated(reason: "Use \`paymentSettings\` instead")
#
#  """
#  The shop’s terms of service.
#  """
#  termsOfService: ShopPolicy
#}
#
#"""
#Policy that a merchant has configured for their store, such as their refund or privacy policy.
#"""
#type ShopPolicy implements Node {
#  """
#  Policy text, maximum size of 64kb.
#  """
#  body: String!
#
#  """
#  Policy’s handle.
#  """
#  handle: String!
#
#  """
#  Globally unique identifier.
#  """
#  id: ID!
#
#  """
#  Policy’s title.
#  """
#  title: String!
#
#  """
#  Public URL to the policy.
#  """
#  url: URL!
#}

type StringConnection {
  """
  A list of edges.
  """
  edges: [StringEdge!]!

  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
}

type StringEdge {
  """
  A cursor for use in pagination.
  """
  cursor: String!

  """
  The item at the end of StringEdge.
  """
  node: String!
}

"""
Specifies the fields required to complete a checkout with
a tokenized payment.
"""
input TokenizedPaymentInput {
  """
  The amount of the payment.
  """
  amount: MoneyInput!

  """
  A unique client generated key used to avoid duplicate charges. When a
  duplicate payment is found, the original is returned instead of creating a new one.
  """
  idempotencyKey: String!

  """
  The billing address for the payment.
  """
  billingAddress: MailingAddressInput!

  """
  The type of payment token.
  """
  type: String!

  """
  A simple string or JSON containing the required payment data for the tokenized payment.
  """
  paymentData: String!

  """
  Executes the payment in test mode if possible. Defaults to \`false\`.
  """
  test: Boolean = false

  """
  Public Hash Key used for AndroidPay payments only.
  """
  identifier: String
}

"""
Specifies the fields required to complete a checkout with
a tokenized payment.
"""
input TokenizedPaymentInputV2 {
  """
  The amount and currency of the payment.
  """
  paymentAmount: MoneyInput!

  """
  A unique client generated key used to avoid duplicate charges. When a
  duplicate payment is found, the original is returned instead of creating a new one.
  """
  idempotencyKey: String!

  """
  The billing address for the payment.
  """
  billingAddress: MailingAddressInput!

  """
  The type of payment token.
  """
  type: String!

  """
  A simple string or JSON containing the required payment data for the tokenized payment.
  """
  paymentData: String!

  """
  Executes the payment in test mode if possible. Defaults to \`false\`.
  """
  test: Boolean = false

  """
  Public Hash Key used for AndroidPay payments only.
  """
  identifier: String
}

"""
An object representing exchange of money for a product or service.
"""
type Transaction {
  """
  The amount of money that the transaction was for.
  """
  amount: Money! @deprecated(reason: "Use \`amountV2\` instead")

  """
  The amount of money that the transaction was for.
  """
  amountV2: MoneyV2!

  """
  The kind of the transaction.
  """
  kind: TransactionKind!

  """
  The status of the transaction.
  """
  status: TransactionStatus! @deprecated(reason: "Use \`statusV2\` instead")

  """
  The status of the transaction.
  """
  statusV2: TransactionStatus

  """
  Whether the transaction was done in test mode or not.
  """
  test: Boolean!
}

enum TransactionKind {
  SALE
  CAPTURE
  AUTHORIZATION
  EMV_AUTHORIZATION
  CHANGE
}

enum TransactionStatus {
  PENDING
  SUCCESS
  FAILURE
  ERROR
}

"""
An RFC 3986 and RFC 3987 compliant URI string.

Example value: \`"https://johns-apparel.myshopify.com"\`.
"""
scalar URL

"""
Represents an error in the input of a mutation.
"""
type UserError implements DisplayableError {
  """
  Path to the input field which caused the error.
  """
  field: [String!]

  """
  The error message.
  """
  message: String!
}

"""
Units of measurement for weight.
"""
enum WeightUnit {
  """
  1 kilogram equals 1000 grams.
  """
  KILOGRAMS

  """
  Metric system unit of mass.
  """
  GRAMS

  """
  1 pound equals 16 ounces.
  """
  POUNDS

  """
  Imperial system unit of mass.
  """
  OUNCES
}


`;

module.exports = typeDefs;
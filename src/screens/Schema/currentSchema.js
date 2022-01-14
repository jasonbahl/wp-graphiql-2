const currentSchema = `schema {
    query: RootQuery
    mutation: RootMutation
  }
  
  """
  Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from.
  """
  type Avatar {
    """
    URL for the default image or a default type. Accepts &#039;404&#039; (return a
    404 instead of a default image), &#039;retro&#039; (8bit),
    &#039;monsterid&#039; (monster), &#039;wavatar&#039; (cartoon face),
    &#039;indenticon&#039; (the &#039;quilt&#039;), &#039;mystery&#039;,
    &#039;mm&#039;, or &#039;mysteryman&#039; (The Oyster Man), &#039;blank&#039;
    (transparent GIF), or &#039;gravatar_default&#039; (the Gravatar logo).
    """
    default: String
  
    """HTML attributes to insert in the IMG element. Is not sanitized."""
    extraAttr: String
  
    """Whether to always show the default image, never the Gravatar."""
    forceDefault: Boolean
  
    """Whether the avatar was successfully found."""
    foundAvatar: Boolean
  
    """Height of the avatar image."""
    height: Int
  
    """Whether the object is restricted from the current viewer"""
    isRestricted: Boolean
  
    """
    What rating to display avatars up to. Accepts &#039;G&#039;, &#039;PG&#039;,
    &#039;R&#039;, &#039;X&#039;, and are judged in that order.
    """
    rating: String
  
    """Type of url scheme to use. Typically HTTP vs. HTTPS."""
    scheme: String
  
    """
    The size of the avatar in pixels. A value of 96 will match a 96px x 96px gravatar image.
    """
    size: Int
  
    """URL for the gravatar image source."""
    url: String
  
    """Width of the avatar image."""
    width: Int
  }
  
  """
  What rating to display avatars up to. Accepts 'G', 'PG', 'R', 'X', and are
  judged in that order. Default is the value of the 'avatar_rating' option
  """
  enum AvatarRatingEnum {
    """Indicates a G level avatar rating level."""
    G
  
    """Indicates a PG level avatar rating level."""
    PG
  
    """Indicates an R level avatar rating level."""
    R
  
    """Indicates an X level avatar rating level."""
    X
  }
  
  """The category type"""
  type Category implements Node & TermNode & UniformResourceIdentifiable & DatabaseIdentifier & HierarchicalTermNode & HierarchicalNode & MenuItemLinkable {
    """
    The ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root).
    """
    ancestors(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
    ): CategoryToAncestorsCategoryConnection
  
    """The id field matches the WP_Post-&gt;ID field."""
    categoryId: Int @deprecated(reason: "Deprecated in favor of databaseId")
  
    """Connection between the category type and the category type"""
    children(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
  
      """Arguments for filtering the connection"""
      where: CategoryToCategoryConnectionWhereArgs
    ): CategoryToCategoryConnection
  
    """Connection between the category type and the ContentNode type"""
    contentNodes(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
  
      """Arguments for filtering the connection"""
      where: CategoryToContentNodeConnectionWhereArgs
    ): CategoryToContentNodeConnection
  
    """The number of objects connected to the object"""
    count: Int
  
    """The unique identifier stored in the database"""
    databaseId: Int!
  
    """The description of the object"""
    description: String
  
    """Connection between the TermNode type and the EnqueuedScript type"""
    enqueuedScripts(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
    ): TermNodeToEnqueuedScriptConnection
  
    """Connection between the TermNode type and the EnqueuedStylesheet type"""
    enqueuedStylesheets(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
    ): TermNodeToEnqueuedStylesheetConnection
  
    """The unique resource identifier path"""
    id: ID!
  
    """Whether the node is a Content Node"""
    isContentNode: Boolean!
  
    """Whether the object is restricted from the current viewer"""
    isRestricted: Boolean
  
    """Whether the node is a Term"""
    isTermNode: Boolean!
  
    """The link to the term"""
    link: String
  
    """The human friendly name of the object."""
    name: String
  
    """Connection between the category type and the category type"""
    parent: CategoryToParentCategoryConnectionEdge
  
    """Database id of the parent node"""
    parentDatabaseId: Int
  
    """The globally unique identifier of the parent node."""
    parentId: ID
  
    """Connection between the category type and the post type"""
    posts(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
  
      """Arguments for filtering the connection"""
      where: CategoryToPostConnectionWhereArgs
    ): CategoryToPostConnection
  
    """An alphanumeric identifier for the object unique to its type."""
    slug: String
  
    """Connection between the category type and the Taxonomy type"""
    taxonomy: CategoryToTaxonomyConnectionEdge
  
    """The name of the taxonomy that the object is associated with"""
    taxonomyName: String
  
    """The ID of the term group that this term object belongs to"""
    termGroupId: Int
  
    """The taxonomy ID that the object is associated with"""
    termTaxonomyId: Int
  
    """The unique resource identifier path"""
    uri: String
  }
  
  """
  The Type of Identifier used to fetch a single resource. Default is ID.
  """
  enum CategoryIdType {
    """The Database ID for the node"""
    DATABASE_ID
  
    """The hashed Global ID"""
    ID
  
    """The name of the node"""
    NAME
  
    """Url friendly name of the node"""
    SLUG
  
    """The URI for the node"""
    URI
  }
  
  """Connection between the category type and the category type"""
  type CategoryToAncestorsCategoryConnection implements TermNodeConnection & Connection {
    """Edges for the CategoryToAncestorsCategoryConnection connection"""
    edges: [CategoryToAncestorsCategoryConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [Category!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type CategoryToAncestorsCategoryConnectionEdge implements Edge & TermNodeConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: Category!
  }
  
  """Connection between the category type and the category type"""
  type CategoryToCategoryConnection implements TermNodeConnection & Connection {
    """Edges for the CategoryToCategoryConnection connection"""
    edges: [CategoryToCategoryConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [Category!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type CategoryToCategoryConnectionEdge implements Edge & TermNodeConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: Category!
  }
  
  """Arguments for filtering the CategoryToCategoryConnection connection"""
  input CategoryToCategoryConnectionWhereArgs {
    """
    Unique cache key to be produced when this query is stored in an object cache. Default is 'core'.
    """
    cacheDomain: String
  
    """
    Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0.
    """
    childOf: Int
  
    """
    True to limit results to terms that have no children. This parameter has no
    effect on non-hierarchical taxonomies. Default false.
    """
    childless: Boolean
  
    """
    Retrieve terms where the description is LIKE the input value. Default empty.
    """
    descriptionLike: String
  
    """
    Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array.
    """
    exclude: [ID]
  
    """
    Array of term ids to exclude along with all of their descendant terms. If
    $include is non-empty, $exclude_tree is ignored. Default empty array.
    """
    excludeTree: [ID]
  
    """
    Whether to hide terms not assigned to any posts. Accepts true or false. Default false
    """
    hideEmpty: Boolean
  
    """
    Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true.
    """
    hierarchical: Boolean
  
    """Array of term ids to include. Default empty array."""
    include: [ID]
  
    """Array of names to return term(s) for. Default empty."""
    name: [String]
  
    """Retrieve terms where the name is LIKE the input value. Default empty."""
    nameLike: String
  
    """
    Array of object IDs. Results will be limited to terms associated with these objects.
    """
    objectIds: [ID]
  
    """Direction the connection should be ordered in"""
    order: OrderEnum
  
    """Field(s) to order terms by. Defaults to 'name'."""
    orderby: TermObjectsConnectionOrderbyEnum
  
    """
    Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false.
    """
    padCounts: Boolean
  
    """Parent term ID to retrieve direct-child terms of. Default empty."""
    parent: Int
  
    """
    Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty.
    """
    search: String
  
    """Array of slugs to return term(s) for. Default empty."""
    slug: [String]
  
    """Array of term taxonomy IDs, to match when querying terms."""
    termTaxonomId: [ID]
  
    """Whether to prime meta caches for matched terms. Default true."""
    updateTermMetaCache: Boolean
  }
  
  """Connection between the category type and the ContentNode type"""
  type CategoryToContentNodeConnection implements ContentNodeConnection & Connection {
    """Edges for the CategoryToContentNodeConnection connection"""
    edges: [CategoryToContentNodeConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [ContentNode!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type CategoryToContentNodeConnectionEdge implements Edge & ContentNodeConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: ContentNode!
  }
  
  """
  Arguments for filtering the CategoryToContentNodeConnection connection
  """
  input CategoryToContentNodeConnectionWhereArgs {
    """The Types of content to filter"""
    contentTypes: [ContentTypesOfCategoryEnum]
  
    """Filter the connection based on dates"""
    dateQuery: DateQueryInput
  
    """
    True for objects with passwords; False for objects without passwords; null for all objects with or without passwords
    """
    hasPassword: Boolean
  
    """Specific ID of the object"""
    id: Int
  
    """Array of IDs for the objects to retrieve"""
    in: [ID]
  
    """Get objects with a specific mimeType property"""
    mimeType: MimeTypeEnum
  
    """Slug / post_name of the object"""
    name: String
  
    """Specify objects to retrieve. Use slugs"""
    nameIn: [String]
  
    """
    Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored
    """
    notIn: [ID]
  
    """What paramater to use to order the objects by."""
    orderby: [PostObjectsConnectionOrderbyInput]
  
    """Use ID to return only children. Use 0 to return only top-level items"""
    parent: ID
  
    """Specify objects whose parent is in an array"""
    parentIn: [ID]
  
    """Specify posts whose parent is not in an array"""
    parentNotIn: [ID]
  
    """Show posts with a specific password."""
    password: String
  
    """Show Posts based on a keyword search"""
    search: String
  
    """Retrieve posts where post status is in an array."""
    stati: [PostStatusEnum]
  
    """Show posts with a specific status."""
    status: PostStatusEnum
  
    """Title of the object"""
    title: String
  }
  
  """Connection between the category type and the category type"""
  type CategoryToParentCategoryConnectionEdge implements SingleNodeConnectionEdge & Edge & TermNodeConnectionEdge {
    """The node of the connection, without the edges"""
    node: Category!
  }
  
  """Connection between the category type and the post type"""
  type CategoryToPostConnection implements ContentNodeConnection & Connection {
    """Edges for the CategoryToPostConnection connection"""
    edges: [CategoryToPostConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [Post!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type CategoryToPostConnectionEdge implements Edge & ContentNodeConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: Post!
  }
  
  """Arguments for filtering the CategoryToPostConnection connection"""
  input CategoryToPostConnectionWhereArgs {
    """
    The user that's connected as the author of the object. Use the userId for the author object.
    """
    author: Int
  
    """Find objects connected to author(s) in the array of author's userIds"""
    authorIn: [ID]
  
    """Find objects connected to the author by the author's nicename"""
    authorName: String
  
    """
    Find objects NOT connected to author(s) in the array of author's userIds
    """
    authorNotIn: [ID]
  
    """Category ID"""
    categoryId: Int
  
    """
    Array of category IDs, used to display objects from one category OR another
    """
    categoryIn: [ID]
  
    """Use Category Slug"""
    categoryName: String
  
    """
    Array of category IDs, used to display objects from one category OR another
    """
    categoryNotIn: [ID]
  
    """Filter the connection based on dates"""
    dateQuery: DateQueryInput
  
    """
    True for objects with passwords; False for objects without passwords; null for all objects with or without passwords
    """
    hasPassword: Boolean
  
    """Specific ID of the object"""
    id: Int
  
    """Array of IDs for the objects to retrieve"""
    in: [ID]
  
    """Get objects with a specific mimeType property"""
    mimeType: MimeTypeEnum
  
    """Slug / post_name of the object"""
    name: String
  
    """Specify objects to retrieve. Use slugs"""
    nameIn: [String]
  
    """
    Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored
    """
    notIn: [ID]
  
    """What paramater to use to order the objects by."""
    orderby: [PostObjectsConnectionOrderbyInput]
  
    """Use ID to return only children. Use 0 to return only top-level items"""
    parent: ID
  
    """Specify objects whose parent is in an array"""
    parentIn: [ID]
  
    """Specify posts whose parent is not in an array"""
    parentNotIn: [ID]
  
    """Show posts with a specific password."""
    password: String
  
    """Show Posts based on a keyword search"""
    search: String
  
    """Retrieve posts where post status is in an array."""
    stati: [PostStatusEnum]
  
    """Show posts with a specific status."""
    status: PostStatusEnum
  
    """Tag Slug"""
    tag: String
  
    """Use Tag ID"""
    tagId: String
  
    """Array of tag IDs, used to display objects from one tag OR another"""
    tagIn: [ID]
  
    """Array of tag IDs, used to display objects from one tag OR another"""
    tagNotIn: [ID]
  
    """Array of tag slugs, used to display objects from one tag OR another"""
    tagSlugAnd: [String]
  
    """Array of tag slugs, used to exclude objects in specified tags"""
    tagSlugIn: [String]
  
    """Title of the object"""
    title: String
  }
  
  """Connection between the category type and the Taxonomy type"""
  type CategoryToTaxonomyConnectionEdge implements SingleNodeConnectionEdge & Edge & TaxonomyConnectionEdge {
    """The node of the connection, without the edges"""
    node: Taxonomy!
  }
  
  """A Comment object"""
  type Comment implements Node & DatabaseIdentifier {
    """
    User agent used to post the comment. This field is equivalent to
    WP_Comment-&gt;comment_agent and the value matching the
    &quot;comment_agent&quot; column in SQL.
    """
    agent: String
  
    """
    The approval status of the comment. This field is equivalent to
    WP_Comment-&gt;comment_approved and the value matching the
    &quot;comment_approved&quot; column in SQL.
    """
    approved: Boolean
  
    """The author of the comment"""
    author: CommentToCommenterConnectionEdge
  
    """
    IP address for the author. This field is equivalent to
    WP_Comment-&gt;comment_author_IP and the value matching the
    &quot;comment_author_IP&quot; column in SQL.
    """
    authorIp: String
  
    """ID for the comment, unique among comments."""
    commentId: Int @deprecated(reason: "Deprecated in favor of databaseId")
  
    """Connection between the Comment type and the ContentNode type"""
    commentedOn: CommentToContentNodeConnectionEdge
  
    """
    Content of the comment. This field is equivalent to
    WP_Comment-&gt;comment_content and the value matching the
    &quot;comment_content&quot; column in SQL.
    """
    content(
      """Format of the field output"""
      format: PostObjectFieldFormatEnum
    ): String
  
    """The unique identifier stored in the database"""
    databaseId: Int!
  
    """
    Date the comment was posted in local time. This field is equivalent to
    WP_Comment-&gt;date and the value matching the &quot;date&quot; column in SQL.
    """
    date: String
  
    """
    Date the comment was posted in GMT. This field is equivalent to
    WP_Comment-&gt;date_gmt and the value matching the &quot;date_gmt&quot; column
    """
    dateGmt: String
  
    """The globally unique identifier for the comment object"""
    id: ID!
  
    """Whether the object is restricted from the current viewer"""
    isRestricted: Boolean
  
    """
    Karma value for the comment. This field is equivalent to
    WP_Comment-&gt;comment_karma and the value matching the
    &quot;comment_karma&quot; column in SQL.
    """
    karma: Int
  
    """Connection between the Comment type and the Comment type"""
    parent(
      """Arguments for filtering the connection"""
      where: CommentToParentCommentConnectionWhereArgs
    ): CommentToParentCommentConnectionEdge
  
    """
    The database id of the parent comment node or null if it is the root comment
    """
    parentDatabaseId: Int
  
    """The globally unique identifier of the parent comment node."""
    parentId: ID
  
    """Connection between the Comment type and the Comment type"""
    replies(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
  
      """Arguments for filtering the connection"""
      where: CommentToCommentConnectionWhereArgs
    ): CommentToCommentConnection
  
    """
    Type of comment. This field is equivalent to WP_Comment-&gt;comment_type and
    the value matching the &quot;comment_type&quot; column in SQL.
    """
    type: String
  }
  
  """A Comment Author object"""
  type CommentAuthor implements Node & Commenter & DatabaseIdentifier {
    """The unique identifier stored in the database"""
    databaseId: Int!
  
    """The email for the comment author"""
    email: String
  
    """The globally unique identifier for the comment author object"""
    id: ID!
  
    """Whether the object is restricted from the current viewer"""
    isRestricted: Boolean
  
    """The name for the comment author."""
    name: String
  
    """The url the comment author."""
    url: String
  }
  
  """Connection to Comment Nodes"""
  interface CommentConnection implements Connection {
    """A list of edges (relational context) between connected nodes"""
    edges: [CommentConnectionEdge!]!
  
    """A list of connected Comment Nodes"""
    nodes: [Comment!]!
  }
  
  """Edge between a Node and a connected Comment"""
  interface CommentConnectionEdge implements Edge {
    """The connected node"""
    node: Node!
  }
  
  """Connection between the Comment type and the Comment type"""
  type CommentToCommentConnection implements CommentConnection & Connection {
    """Edges for the CommentToCommentConnection connection"""
    edges: [CommentToCommentConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [Comment!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type CommentToCommentConnectionEdge implements Edge & CommentConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: Comment!
  }
  
  """Arguments for filtering the CommentToCommentConnection connection"""
  input CommentToCommentConnectionWhereArgs {
    """Comment author email address."""
    authorEmail: String
  
    """Array of author IDs to include comments for."""
    authorIn: [ID]
  
    """Array of author IDs to exclude comments for."""
    authorNotIn: [ID]
  
    """Comment author URL."""
    authorUrl: String
  
    """Array of comment IDs to include."""
    commentIn: [ID]
  
    """
    Array of IDs of users whose unapproved comments will be returned by the query regardless of status.
    """
    commentNotIn: [ID]
  
    """Include comments of a given type."""
    commentType: String
  
    """Include comments from a given array of comment types."""
    commentTypeIn: [String]
  
    """Exclude comments from a given array of comment types."""
    commentTypeNotIn: String
  
    """Content object author ID to limit results by."""
    contentAuthor: [ID]
  
    """Array of author IDs to retrieve comments for."""
    contentAuthorIn: [ID]
  
    """Array of author IDs *not* to retrieve comments for."""
    contentAuthorNotIn: [ID]
  
    """Limit results to those affiliated with a given content object ID."""
    contentId: ID
  
    """Array of content object IDs to include affiliated comments for."""
    contentIdIn: [ID]
  
    """Array of content object IDs to exclude affiliated comments for."""
    contentIdNotIn: [ID]
  
    """Content object name to retrieve affiliated comments for."""
    contentName: String
  
    """Content Object parent ID to retrieve affiliated comments for."""
    contentParent: Int
  
    """
    Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value.
    """
    contentStatus: [PostStatusEnum]
  
    """
    Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value.
    """
    contentType: [ContentTypeEnum]
  
    """
    Array of IDs or email addresses of users whose unapproved comments will be
    returned by the query regardless of $status. Default empty
    """
    includeUnapproved: [ID]
  
    """Karma score to retrieve matching comments for."""
    karma: Int
  
    """The cardinality of the order of the connection"""
    order: OrderEnum
  
    """Field to order the comments by."""
    orderby: CommentsConnectionOrderbyEnum
  
    """Parent ID of comment to retrieve children of."""
    parent: Int
  
    """Array of parent IDs of comments to retrieve children for."""
    parentIn: [ID]
  
    """Array of parent IDs of comments *not* to retrieve children for."""
    parentNotIn: [ID]
  
    """Search term(s) to retrieve matching comments for."""
    search: String
  
    """Comment status to limit results by."""
    status: String
  
    """Include comments for a specific user ID."""
    userId: ID
  }
  
  """Connection between the Comment type and the Commenter type"""
  type CommentToCommenterConnectionEdge implements SingleNodeConnectionEdge & Edge & CommenterConnectionEdge {
    """The node of the connection, without the edges"""
    node: Commenter!
  }
  
  """Connection between the Comment type and the ContentNode type"""
  type CommentToContentNodeConnectionEdge implements SingleNodeConnectionEdge & Edge & ContentNodeConnectionEdge {
    """The node of the connection, without the edges"""
    node: ContentNode!
  }
  
  """Connection between the Comment type and the Comment type"""
  type CommentToParentCommentConnectionEdge implements SingleNodeConnectionEdge & Edge & CommentConnectionEdge {
    """The node of the connection, without the edges"""
    node: Comment!
  }
  
  """
  Arguments for filtering the CommentToParentCommentConnection connection
  """
  input CommentToParentCommentConnectionWhereArgs {
    """Comment author email address."""
    authorEmail: String
  
    """Array of author IDs to include comments for."""
    authorIn: [ID]
  
    """Array of author IDs to exclude comments for."""
    authorNotIn: [ID]
  
    """Comment author URL."""
    authorUrl: String
  
    """Array of comment IDs to include."""
    commentIn: [ID]
  
    """
    Array of IDs of users whose unapproved comments will be returned by the query regardless of status.
    """
    commentNotIn: [ID]
  
    """Include comments of a given type."""
    commentType: String
  
    """Include comments from a given array of comment types."""
    commentTypeIn: [String]
  
    """Exclude comments from a given array of comment types."""
    commentTypeNotIn: String
  
    """Content object author ID to limit results by."""
    contentAuthor: [ID]
  
    """Array of author IDs to retrieve comments for."""
    contentAuthorIn: [ID]
  
    """Array of author IDs *not* to retrieve comments for."""
    contentAuthorNotIn: [ID]
  
    """Limit results to those affiliated with a given content object ID."""
    contentId: ID
  
    """Array of content object IDs to include affiliated comments for."""
    contentIdIn: [ID]
  
    """Array of content object IDs to exclude affiliated comments for."""
    contentIdNotIn: [ID]
  
    """Content object name to retrieve affiliated comments for."""
    contentName: String
  
    """Content Object parent ID to retrieve affiliated comments for."""
    contentParent: Int
  
    """
    Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value.
    """
    contentStatus: [PostStatusEnum]
  
    """
    Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value.
    """
    contentType: [ContentTypeEnum]
  
    """
    Array of IDs or email addresses of users whose unapproved comments will be
    returned by the query regardless of $status. Default empty
    """
    includeUnapproved: [ID]
  
    """Karma score to retrieve matching comments for."""
    karma: Int
  
    """The cardinality of the order of the connection"""
    order: OrderEnum
  
    """Field to order the comments by."""
    orderby: CommentsConnectionOrderbyEnum
  
    """Parent ID of comment to retrieve children of."""
    parent: Int
  
    """Array of parent IDs of comments to retrieve children for."""
    parentIn: [ID]
  
    """Array of parent IDs of comments *not* to retrieve children for."""
    parentNotIn: [ID]
  
    """Search term(s) to retrieve matching comments for."""
    search: String
  
    """Comment status to limit results by."""
    status: String
  
    """Include comments for a specific user ID."""
    userId: ID
  }
  
  """The author of a comment"""
  interface Commenter implements Node & DatabaseIdentifier {
    """The unique identifier stored in the database"""
    databaseId: Int!
  
    """The email address of the author of a comment."""
    email: String
  
    """The globally unique ID for the object"""
    id: ID!
  
    """
    Whether the author information is considered restricted. (not fully public)
    """
    isRestricted: Boolean
  
    """The name of the author of a comment."""
    name: String
  
    """The url of the author of a comment."""
    url: String
  }
  
  """Edge between a Node and a connected Commenter"""
  interface CommenterConnectionEdge implements Edge {
    """The connected node"""
    node: Node!
  }
  
  """Options for ordering the connection"""
  enum CommentsConnectionOrderbyEnum {
    """Order by browser user agent of the commenter."""
    COMMENT_AGENT
  
    """Order by true/false approval of the comment."""
    COMMENT_APPROVED
  
    """Order by name of the comment author."""
    COMMENT_AUTHOR
  
    """Order by e-mail of the comment author."""
    COMMENT_AUTHOR_EMAIL
  
    """Order by IP address of the comment author."""
    COMMENT_AUTHOR_IP
  
    """Order by URL address of the comment author."""
    COMMENT_AUTHOR_URL
  
    """Order by the comment contents."""
    COMMENT_CONTENT
  
    """Order by date/time timestamp of the comment."""
    COMMENT_DATE
  
    """Order by GMT timezone date/time timestamp of the comment."""
    COMMENT_DATE_GMT
  
    """Order by the globally unique identifier for the comment object"""
    COMMENT_ID
  
    """Order by the array list of comment IDs listed in the where clause."""
    COMMENT_IN
  
    """Order by the comment karma score."""
    COMMENT_KARMA
  
    """Order by the comment parent ID."""
    COMMENT_PARENT
  
    """Order by the post object ID."""
    COMMENT_POST_ID
  
    """
    Order by the the type of comment, such as 'comment', 'pingback', or 'trackback'.
    """
    COMMENT_TYPE
  
    """Order by the user ID."""
    USER_ID
  }
  
  """
  A plural connection from one Node Type in the Graph to another Node Type, with
  support for relational data via &quot;edges&quot;.
  """
  interface Connection {
    """A list of edges (relational context) between connected nodes"""
    edges: [Edge!]!
  
    """A list of connected nodes"""
    nodes: [Node!]!
  }
  
  """Nodes used to manage content"""
  interface ContentNode implements Node & UniformResourceIdentifiable {
    """Connection between the ContentNode type and the ContentType type"""
    contentType: ContentNodeToContentTypeConnectionEdge
  
    """The ID of the node in the database."""
    databaseId: Int!
  
    """Post publishing date."""
    date: String
  
    """The publishing date set in GMT."""
    dateGmt: String
  
    """The desired slug of the post"""
    desiredSlug: String
  
    """
    If a user has edited the node within the past 15 seconds, this will return the
    user that last edited. Null if the edit lock doesn&#039;t exist or is greater
    than 15 seconds
    """
    editingLockedBy: ContentNodeToEditLockConnectionEdge
  
    """The RSS enclosure for the object"""
    enclosure: String
  
    """Connection between the ContentNode type and the EnqueuedScript type"""
    enqueuedScripts(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
    ): ContentNodeToEnqueuedScriptConnection
  
    """
    Connection between the ContentNode type and the EnqueuedStylesheet type
    """
    enqueuedStylesheets(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
    ): ContentNodeToEnqueuedStylesheetConnection
  
    """
    The global unique identifier for this post. This currently matches the value
    stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot;
    database table.
    """
    guid: String
  
    """The unique resource identifier path"""
    id: ID!
  
    """Whether the node is a Content Node"""
    isContentNode: Boolean!
  
    """Whether the object is a node in the preview state"""
    isPreview: Boolean
  
    """Whether the object is restricted from the current viewer"""
    isRestricted: Boolean
  
    """Whether the node is a Term"""
    isTermNode: Boolean!
  
    """The user that most recently edited the node"""
    lastEditedBy: ContentNodeToEditLastConnectionEdge
  
    """The permalink of the post"""
    link: String
  
    """
    The local modified time for a post. If a post was recently updated the
    modified field will change to match the corresponding time.
    """
    modified: String
  
    """
    The GMT modified time for a post. If a post was recently updated the modified
    field will change to match the corresponding time in GMT.
    """
    modifiedGmt: String
  
    """The database id of the preview node"""
    previewRevisionDatabaseId: Int
  
    """Whether the object is a node in the preview state"""
    previewRevisionId: ID
  
    """
    The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name
    field and the post_name column in the database for the
    &quot;post_objects&quot; table.
    """
    slug: String
  
    """The current status of the object"""
    status: String
  
    """The template assigned to a node of content"""
    template: ContentTemplate
  
    """The unique resource identifier path"""
    uri: String
  }
  
  """Connection to Content Nodes"""
  interface ContentNodeConnection implements Connection {
    """A list of edges (relational context) between connected nodes"""
    edges: [ContentNodeConnectionEdge!]!
  
    """A list of connected Content Nodes"""
    nodes: [ContentNode!]!
  }
  
  """Edge between a Node and a connected Content Node"""
  interface ContentNodeConnectionEdge implements Edge {
    """The connected node"""
    node: Node!
  }
  
  """
  The Type of Identifier used to fetch a single resource. Default is ID.
  """
  enum ContentNodeIdTypeEnum {
    """Identify a resource by the Database ID."""
    DATABASE_ID
  
    """Identify a resource by the (hashed) Global ID."""
    ID
  
    """Identify a resource by the URI."""
    URI
  }
  
  """Connection between the ContentNode type and the ContentType type"""
  type ContentNodeToContentTypeConnectionEdge implements SingleNodeConnectionEdge & Edge & ContentTypeConnectionEdge {
    """The node of the connection, without the edges"""
    node: ContentType!
  }
  
  """Connection between the ContentNode type and the User type"""
  type ContentNodeToEditLastConnectionEdge implements SingleNodeConnectionEdge & Edge & UserConnectionEdge {
    """The node of the connection, without the edges"""
    node: User!
  }
  
  """Connection between the ContentNode type and the User type"""
  type ContentNodeToEditLockConnectionEdge implements SingleNodeConnectionEdge & Edge & UserConnectionEdge {
    """The timestamp for when the node was last edited"""
    lockTimestamp: String
  
    """The node of the connection, without the edges"""
    node: User!
  }
  
  """Connection between the ContentNode type and the EnqueuedScript type"""
  type ContentNodeToEnqueuedScriptConnection {
    """Edges for the ContentNodeToEnqueuedScriptConnection connection"""
    edges: [ContentNodeToEnqueuedScriptConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [EnqueuedScript!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type ContentNodeToEnqueuedScriptConnectionEdge implements Edge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: EnqueuedScript!
  }
  
  """
  Connection between the ContentNode type and the EnqueuedStylesheet type
  """
  type ContentNodeToEnqueuedStylesheetConnection {
    """Edges for the ContentNodeToEnqueuedStylesheetConnection connection"""
    edges: [ContentNodeToEnqueuedStylesheetConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [EnqueuedStylesheet!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type ContentNodeToEnqueuedStylesheetConnectionEdge implements Edge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: EnqueuedStylesheet!
  }
  
  """The template assigned to a node of content"""
  interface ContentTemplate {
    """The name of the template"""
    templateName: String
  }
  
  """An Post Type object"""
  type ContentType implements Node & UniformResourceIdentifiable {
    """Whether this content type should can be exported."""
    canExport: Boolean
  
    """Connection between the ContentType type and the Taxonomy type"""
    connectedTaxonomies(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
    ): ContentTypeToTaxonomyConnection
  
    """Connection between the ContentType type and the ContentNode type"""
    contentNodes(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
  
      """Arguments for filtering the connection"""
      where: ContentTypeToContentNodeConnectionWhereArgs
    ): ContentTypeToContentNodeConnection
  
    """
    Whether content of this type should be deleted when the author of it is deleted from the system.
    """
    deleteWithUser: Boolean
  
    """Description of the content type."""
    description: String
  
    """
    Whether to exclude nodes of this content type from front end search results.
    """
    excludeFromSearch: Boolean
  
    """The plural name of the content type within the GraphQL Schema."""
    graphqlPluralName: String
  
    """The singular name of the content type within the GraphQL Schema."""
    graphqlSingleName: String
  
    """
    Whether this content type should have archives. Content archives are generated by type and by date.
    """
    hasArchive: Boolean
  
    """Whether the content type is hierarchical, for example pages."""
    hierarchical: Boolean
  
    """The globally unique identifier of the post-type object."""
    id: ID!
  
    """Whether the node is a Content Node"""
    isContentNode: Boolean!
  
    """Whether this page is set to the static front page."""
    isFrontPage: Boolean!
  
    """Whether this page is set to the blog posts page."""
    isPostsPage: Boolean!
  
    """Whether the object is restricted from the current viewer"""
    isRestricted: Boolean
  
    """Whether the node is a Term"""
    isTermNode: Boolean!
  
    """Display name of the content type."""
    label: String
  
    """Details about the content type labels."""
    labels: PostTypeLabelDetails
  
    """The name of the icon file to display as a menu icon."""
    menuIcon: String
  
    """
    The position of this post type in the menu. Only applies if show_in_menu is true.
    """
    menuPosition: Int
  
    """
    The internal name of the post type. This should not be used for display purposes.
    """
    name: String
  
    """
    Whether a content type is intended for use publicly either via the admin
    interface or by front-end users. While the default settings of
    exclude_from_search, publicly_queryable, show_ui, and show_in_nav_menus are
    inherited from public, each does not rely on this relationship and controls a
    very specific intention.
    """
    public: Boolean
  
    """
    Whether queries can be performed on the front end for the content type as part of parse_request().
    """
    publiclyQueryable: Boolean
  
    """
    Name of content type to display in REST API &quot;wp/v2&quot; namespace.
    """
    restBase: String
  
    """The REST Controller class assigned to handling this content type."""
    restControllerClass: String
  
    """Makes this content type available via the admin bar."""
    showInAdminBar: Boolean
  
    """Whether to add the content type to the GraphQL Schema."""
    showInGraphql: Boolean
  
    """
    Where to show the content type in the admin menu. To work, $show_ui must be
    true. If true, the post type is shown in its own top level menu. If false, no
    menu is shown. If a string of an existing top level menu (eg.
    &quot;tools.php&quot; or &quot;edit.php?post_type=page&quot;), the post type
    will be placed as a sub-menu of that.
    """
    showInMenu: Boolean
  
    """Makes this content type available for selection in navigation menus."""
    showInNavMenus: Boolean
  
    """
    Whether the content type is associated with a route under the the REST API &quot;wp/v2&quot; namespace.
    """
    showInRest: Boolean
  
    """
    Whether to generate and allow a UI for managing this content type in the admin.
    """
    showUi: Boolean
  
    """The unique resource identifier path"""
    uri: String
  }
  
  """Connection to Content Type Nodes"""
  interface ContentTypeConnection implements Connection {
    """A list of edges (relational context) between connected nodes"""
    edges: [ContentTypeConnectionEdge!]!
  
    """A list of connected Content Type Nodes"""
    nodes: [ContentType!]!
  }
  
  """Edge between a Node and a connected Content Type Node"""
  interface ContentTypeConnectionEdge implements Edge {
    """The connected node"""
    node: Node!
  }
  
  """Allowed Content Types"""
  enum ContentTypeEnum {
    """The Type of Content object"""
    ATTACHMENT
  
    """The Type of Content object"""
    PAGE
  
    """The Type of Content object"""
    POST
  }
  
  """
  The Type of Identifier used to fetch a single Content Type node. To be used along with the "id" field. Default is "ID".
  """
  enum ContentTypeIdTypeEnum {
    """The globally unique ID"""
    ID
  
    """The name of the content type."""
    NAME
  }
  
  """Connection between the ContentType type and the ContentNode type"""
  type ContentTypeToContentNodeConnection implements ContentNodeConnection & Connection {
    """Edges for the ContentTypeToContentNodeConnection connection"""
    edges: [ContentTypeToContentNodeConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [ContentNode!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type ContentTypeToContentNodeConnectionEdge implements Edge & ContentNodeConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: ContentNode!
  }
  
  """
  Arguments for filtering the ContentTypeToContentNodeConnection connection
  """
  input ContentTypeToContentNodeConnectionWhereArgs {
    """The Types of content to filter"""
    contentTypes: [ContentTypeEnum]
  
    """Filter the connection based on dates"""
    dateQuery: DateQueryInput
  
    """
    True for objects with passwords; False for objects without passwords; null for all objects with or without passwords
    """
    hasPassword: Boolean
  
    """Specific ID of the object"""
    id: Int
  
    """Array of IDs for the objects to retrieve"""
    in: [ID]
  
    """Get objects with a specific mimeType property"""
    mimeType: MimeTypeEnum
  
    """Slug / post_name of the object"""
    name: String
  
    """Specify objects to retrieve. Use slugs"""
    nameIn: [String]
  
    """
    Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored
    """
    notIn: [ID]
  
    """What paramater to use to order the objects by."""
    orderby: [PostObjectsConnectionOrderbyInput]
  
    """Use ID to return only children. Use 0 to return only top-level items"""
    parent: ID
  
    """Specify objects whose parent is in an array"""
    parentIn: [ID]
  
    """Specify posts whose parent is not in an array"""
    parentNotIn: [ID]
  
    """Show posts with a specific password."""
    password: String
  
    """Show Posts based on a keyword search"""
    search: String
  
    """Retrieve posts where post status is in an array."""
    stati: [PostStatusEnum]
  
    """Show posts with a specific status."""
    status: PostStatusEnum
  
    """Title of the object"""
    title: String
  }
  
  """Connection between the ContentType type and the Taxonomy type"""
  type ContentTypeToTaxonomyConnection implements TaxonomyConnection & Connection {
    """Edges for the ContentTypeToTaxonomyConnection connection"""
    edges: [ContentTypeToTaxonomyConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [Taxonomy!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type ContentTypeToTaxonomyConnectionEdge implements Edge & TaxonomyConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: Taxonomy!
  }
  
  """Allowed Content Types of the Category taxonomy."""
  enum ContentTypesOfCategoryEnum {
    """The Type of Content object"""
    POST
  }
  
  """Allowed Content Types of the PostFormat taxonomy."""
  enum ContentTypesOfPostFormatEnum {
    """The Type of Content object"""
    POST
  }
  
  """Allowed Content Types of the Tag taxonomy."""
  enum ContentTypesOfTagEnum {
    """The Type of Content object"""
    POST
  }
  
  """Input for the createCategory mutation"""
  input CreateCategoryInput {
    """The slug that the category will be an alias of"""
    aliasOf: String
  
    """
    This is an ID that can be passed to a mutation by the client to track the
    progress of mutations and catch possible duplicate mutation submissions.
    """
    clientMutationId: String
  
    """The description of the category object"""
    description: String
  
    """The name of the category object to mutate"""
    name: String!
  
    """The ID of the category that should be set as the parent"""
    parentId: ID
  
    """
    If this argument exists then the slug will be checked to see if it is not an
    existing valid term. If that check succeeds (it is not a valid term), then it
    is added and the term id is given. If it fails, then a check is made to
    whether the taxonomy is hierarchical and the parent argument is not empty. If
    the second check succeeds, the term will be inserted and the term id will be
    given. If the slug argument is empty, then it will be calculated from the term
    """
    slug: String
  }
  
  """The payload for the createCategory mutation"""
  type CreateCategoryPayload {
    """The created category"""
    category: Category
  
    """
    If a &#039;clientMutationId&#039; input is provided to the mutation, it will
    be returned as output on the mutation. This ID can be used by the client to
    track the progress of mutations and catch possible duplicate mutation
    """
    clientMutationId: String
  }
  
  """Input for the createComment mutation"""
  input CreateCommentInput {
    """The approval status of the comment."""
    approved: String
  
    """The name of the comment's author."""
    author: String
  
    """The email of the comment's author."""
    authorEmail: String
  
    """The url of the comment's author."""
    authorUrl: String
  
    """
    This is an ID that can be passed to a mutation by the client to track the
    progress of mutations and catch possible duplicate mutation submissions.
    """
    clientMutationId: String
  
    """The ID of the post object the comment belongs to."""
    commentOn: Int
  
    """Content of the comment."""
    content: String
  
    """
    The date of the object. Preferable to enter as year/month/day ( e.g.
    01/31/2017 ) as it will rearrange date as fit if it is not specified.
    Incomplete dates may have unintended results for example, "2017" as the input
    will use current date with timestamp 20:17
    """
    date: String
  
    """Parent comment of current comment."""
    parent: ID
  
    """Type of comment."""
    type: String
  }
  
  """The payload for the createComment mutation"""
  type CreateCommentPayload {
    """
    If a &#039;clientMutationId&#039; input is provided to the mutation, it will
    be returned as output on the mutation. This ID can be used by the client to
    track the progress of mutations and catch possible duplicate mutation
    """
    clientMutationId: String
  
    """The comment that was created"""
    comment: Comment
  
    """
    Whether the mutation succeeded. If the comment is not approved, the server
    will not return the comment to a non authenticated user, but a success message
    can be returned if the create succeeded, and the client can optimistically add
    the comment to the client cache
    """
    success: Boolean
  }
  
  """Input for the createMediaItem mutation"""
  input CreateMediaItemInput {
    """Alternative text to display when mediaItem is not displayed"""
    altText: String
  
    """The userId to assign as the author of the mediaItem"""
    authorId: ID
  
    """The caption for the mediaItem"""
    caption: String
  
    """
    This is an ID that can be passed to a mutation by the client to track the
    progress of mutations and catch possible duplicate mutation submissions.
    """
    clientMutationId: String
  
    """The comment status for the mediaItem"""
    commentStatus: String
  
    """The date of the mediaItem"""
    date: String
  
    """The date (in GMT zone) of the mediaItem"""
    dateGmt: String
  
    """Description of the mediaItem"""
    description: String
  
    """The file name of the mediaItem"""
    filePath: String
  
    """The file type of the mediaItem"""
    fileType: MimeTypeEnum
  
    """The WordPress post ID or the graphQL postId of the parent object"""
    parentId: ID
  
    """The ping status for the mediaItem"""
    pingStatus: String
  
    """The slug of the mediaItem"""
    slug: String
  
    """The status of the mediaItem"""
    status: MediaItemStatusEnum
  
    """The title of the mediaItem"""
    title: String
  }
  
  """The payload for the createMediaItem mutation"""
  type CreateMediaItemPayload {
    """
    If a &#039;clientMutationId&#039; input is provided to the mutation, it will
    be returned as output on the mutation. This ID can be used by the client to
    track the progress of mutations and catch possible duplicate mutation
    """
    clientMutationId: String
  
    """The MediaItem object mutation type."""
    mediaItem: MediaItem
  }
  
  """Input for the createPage mutation"""
  input CreatePageInput {
    """The userId to assign as the author of the object"""
    authorId: ID
  
    """
    This is an ID that can be passed to a mutation by the client to track the
    progress of mutations and catch possible duplicate mutation submissions.
    """
    clientMutationId: String
  
    """The comment status for the object"""
    commentStatus: String
  
    """The content of the object"""
    content: String
  
    """
    The date of the object. Preferable to enter as year/month/day (e.g.
    01/31/2017) as it will rearrange date as fit if it is not specified.
    Incomplete dates may have unintended results for example, "2017" as the input
    will use current date with timestamp 20:17
    """
    date: String
  
    """
    A field used for ordering posts. This is typically used with nav menu items or
    for special ordering of hierarchical content types.
    """
    menuOrder: Int
  
    """The ID of the parent object"""
    parentId: ID
  
    """The password used to protect the content of the object"""
    password: String
  
    """The slug of the object"""
    slug: String
  
    """The status of the object"""
    status: PostStatusEnum
  
    """The title of the object"""
    title: String
  }
  
  """The payload for the createPage mutation"""
  type CreatePagePayload {
    """
    If a &#039;clientMutationId&#039; input is provided to the mutation, it will
    be returned as output on the mutation. This ID can be used by the client to
    track the progress of mutations and catch possible duplicate mutation
    """
    clientMutationId: String
  
    """The Post object mutation type."""
    page: Page
  }
  
  """Input for the createPostFormat mutation"""
  input CreatePostFormatInput {
    """The slug that the post_format will be an alias of"""
    aliasOf: String
  
    """
    This is an ID that can be passed to a mutation by the client to track the
    progress of mutations and catch possible duplicate mutation submissions.
    """
    clientMutationId: String
  
    """The description of the post_format object"""
    description: String
  
    """The name of the post_format object to mutate"""
    name: String!
  
    """
    If this argument exists then the slug will be checked to see if it is not an
    existing valid term. If that check succeeds (it is not a valid term), then it
    is added and the term id is given. If it fails, then a check is made to
    whether the taxonomy is hierarchical and the parent argument is not empty. If
    the second check succeeds, the term will be inserted and the term id will be
    given. If the slug argument is empty, then it will be calculated from the term
    """
    slug: String
  }
  
  """The payload for the createPostFormat mutation"""
  type CreatePostFormatPayload {
    """
    If a &#039;clientMutationId&#039; input is provided to the mutation, it will
    be returned as output on the mutation. This ID can be used by the client to
    track the progress of mutations and catch possible duplicate mutation
    """
    clientMutationId: String
  
    """The created post_format"""
    postFormat: PostFormat
  }
  
  """Input for the createPost mutation"""
  input CreatePostInput {
    """The userId to assign as the author of the object"""
    authorId: ID
  
    """Set connections between the post and categories"""
    categories: PostCategoriesInput
  
    """
    This is an ID that can be passed to a mutation by the client to track the
    progress of mutations and catch possible duplicate mutation submissions.
    """
    clientMutationId: String
  
    """The comment status for the object"""
    commentStatus: String
  
    """The content of the object"""
    content: String
  
    """
    The date of the object. Preferable to enter as year/month/day (e.g.
    01/31/2017) as it will rearrange date as fit if it is not specified.
    Incomplete dates may have unintended results for example, "2017" as the input
    will use current date with timestamp 20:17
    """
    date: String
  
    """The excerpt of the object"""
    excerpt: String
  
    """
    A field used for ordering posts. This is typically used with nav menu items or
    for special ordering of hierarchical content types.
    """
    menuOrder: Int
  
    """The password used to protect the content of the object"""
    password: String
  
    """The ping status for the object"""
    pingStatus: String
  
    """URLs that have been pinged."""
    pinged: [String]
  
    """Set connections between the post and postFormats"""
    postFormats: PostPostFormatsInput
  
    """The slug of the object"""
    slug: String
  
    """The status of the object"""
    status: PostStatusEnum
  
    """Set connections between the post and tags"""
    tags: PostTagsInput
  
    """The title of the object"""
    title: String
  
    """URLs queued to be pinged."""
    toPing: [String]
  }
  
  """The payload for the createPost mutation"""
  type CreatePostPayload {
    """
    If a &#039;clientMutationId&#039; input is provided to the mutation, it will
    be returned as output on the mutation. This ID can be used by the client to
    track the progress of mutations and catch possible duplicate mutation
    """
    clientMutationId: String
  
    """The Post object mutation type."""
    post: Post
  }
  
  """Input for the createTag mutation"""
  input CreateTagInput {
    """The slug that the post_tag will be an alias of"""
    aliasOf: String
  
    """
    This is an ID that can be passed to a mutation by the client to track the
    progress of mutations and catch possible duplicate mutation submissions.
    """
    clientMutationId: String
  
    """The description of the post_tag object"""
    description: String
  
    """The name of the post_tag object to mutate"""
    name: String!
  
    """
    If this argument exists then the slug will be checked to see if it is not an
    existing valid term. If that check succeeds (it is not a valid term), then it
    is added and the term id is given. If it fails, then a check is made to
    whether the taxonomy is hierarchical and the parent argument is not empty. If
    the second check succeeds, the term will be inserted and the term id will be
    given. If the slug argument is empty, then it will be calculated from the term
    """
    slug: String
  }
  
  """The payload for the createTag mutation"""
  type CreateTagPayload {
    """
    If a &#039;clientMutationId&#039; input is provided to the mutation, it will
    be returned as output on the mutation. This ID can be used by the client to
    track the progress of mutations and catch possible duplicate mutation
    """
    clientMutationId: String
  
    """The created post_tag"""
    tag: Tag
  }
  
  """Input for the createUser mutation"""
  input CreateUserInput {
    """User's AOL IM account."""
    aim: String
  
    """
    This is an ID that can be passed to a mutation by the client to track the
    progress of mutations and catch possible duplicate mutation submissions.
    """
    clientMutationId: String
  
    """A string containing content about the user."""
    description: String
  
    """
    A string that will be shown on the site. Defaults to user's username. It is
    likely that you will want to change this, for both appearance and security
    through obscurity (that is if you dont use and delete the default admin user).
    """
    displayName: String
  
    """A string containing the user's email address."""
    email: String
  
    """	The user's first name."""
    firstName: String
  
    """User's Jabber account."""
    jabber: String
  
    """The user's last name."""
    lastName: String
  
    """User's locale."""
    locale: String
  
    """
    A string that contains a URL-friendly name for the user. The default is the user's username.
    """
    nicename: String
  
    """The user's nickname, defaults to the user's username."""
    nickname: String
  
    """A string that contains the plain text password for the user."""
    password: String
  
    """The date the user registered. Format is Y-m-d H:i:s."""
    registered: String
  
    """
    A string for whether to enable the rich editor or not. False if not empty.
    """
    richEditing: String
  
    """An array of roles to be assigned to the user."""
    roles: [String]
  
    """A string that contains the user's username for logging in."""
    username: String!
  
    """A string containing the user's URL for the user's web site."""
    websiteUrl: String
  
    """User's Yahoo IM account."""
    yim: String
  }
  
  """The payload for the createUser mutation"""
  type CreateUserPayload {
    """
    If a &#039;clientMutationId&#039; input is provided to the mutation, it will
    be returned as output on the mutation. This ID can be used by the client to
    track the progress of mutations and catch possible duplicate mutation
    """
    clientMutationId: String
  
    """The User object mutation type."""
    user: User
  }
  
  """Object that can be identified with a Database ID"""
  interface DatabaseIdentifier {
    """The unique identifier stored in the database"""
    databaseId: Int!
  }
  
  """Date values"""
  input DateInput {
    """Day of the month (from 1 to 31)"""
    day: Int
  
    """Month number (from 1 to 12)"""
    month: Int
  
    """4 digit year (e.g. 2017)"""
    year: Int
  }
  
  """Filter the connection based on input"""
  input DateQueryInput {
    """Nodes should be returned after this date"""
    after: DateInput
  
    """Nodes should be returned before this date"""
    before: DateInput
  
    """Column to query against"""
    column: PostObjectsConnectionDateColumnEnum
  
    """For after/before, whether exact value should be matched or not"""
    compare: String
  
    """Day of the month (from 1 to 31)"""
    day: Int
  
    """Hour (from 0 to 23)"""
    hour: Int
  
    """For after/before, whether exact value should be matched or not"""
    inclusive: Boolean
  
    """Minute (from 0 to 59)"""
    minute: Int
  
    """Month number (from 1 to 12)"""
    month: Int
  
    """OR or AND, how the sub-arrays should be compared"""
    relation: RelationEnum
  
    """Second (0 to 59)"""
    second: Int
  
    """Week of the year (from 0 to 53)"""
    week: Int
  
    """4 digit year (e.g. 2017)"""
    year: Int
  }
  
  """The template assigned to the node"""
  type DefaultTemplate implements ContentTemplate {
    """The name of the template"""
    templateName: String
  }
  
  """Input for the deleteCategory mutation"""
  input DeleteCategoryInput {
    """
    This is an ID that can be passed to a mutation by the client to track the
    progress of mutations and catch possible duplicate mutation submissions.
    """
    clientMutationId: String
  
    """The ID of the category to delete"""
    id: ID!
  }
  
  """The payload for the deleteCategory mutation"""
  type DeleteCategoryPayload {
    """The deteted term object"""
    category: Category
  
    """
    If a &#039;clientMutationId&#039; input is provided to the mutation, it will
    be returned as output on the mutation. This ID can be used by the client to
    track the progress of mutations and catch possible duplicate mutation
    """
    clientMutationId: String
  
    """The ID of the deleted object"""
    deletedId: ID
  }
  
  """Input for the deleteComment mutation"""
  input DeleteCommentInput {
    """
    This is an ID that can be passed to a mutation by the client to track the
    progress of mutations and catch possible duplicate mutation submissions.
    """
    clientMutationId: String
  
    """
    Whether the comment should be force deleted instead of being moved to the trash
    """
    forceDelete: Boolean
  
    """The deleted comment ID"""
    id: ID!
  }
  
  """The payload for the deleteComment mutation"""
  type DeleteCommentPayload {
    """
    If a &#039;clientMutationId&#039; input is provided to the mutation, it will
    be returned as output on the mutation. This ID can be used by the client to
    track the progress of mutations and catch possible duplicate mutation
    """
    clientMutationId: String
  
    """The deleted comment object"""
    comment: Comment
  
    """The deleted comment ID"""
    deletedId: ID
  }
  
  """Input for the deleteMediaItem mutation"""
  input DeleteMediaItemInput {
    """
    This is an ID that can be passed to a mutation by the client to track the
    progress of mutations and catch possible duplicate mutation submissions.
    """
    clientMutationId: String
  
    """
    Whether the mediaItem should be force deleted instead of being moved to the trash
    """
    forceDelete: Boolean
  
    """The ID of the mediaItem to delete"""
    id: ID!
  }
  
  """The payload for the deleteMediaItem mutation"""
  type DeleteMediaItemPayload {
    """
    If a &#039;clientMutationId&#039; input is provided to the mutation, it will
    be returned as output on the mutation. This ID can be used by the client to
    track the progress of mutations and catch possible duplicate mutation
    """
    clientMutationId: String
  
    """The ID of the deleted mediaItem"""
    deletedId: ID
  
    """The mediaItem before it was deleted"""
    mediaItem: MediaItem
  }
  
  """Input for the deletePage mutation"""
  input DeletePageInput {
    """
    This is an ID that can be passed to a mutation by the client to track the
    progress of mutations and catch possible duplicate mutation submissions.
    """
    clientMutationId: String
  
    """
    Whether the object should be force deleted instead of being moved to the trash
    """
    forceDelete: Boolean
  
    """The ID of the page to delete"""
    id: ID!
  }
  
  """The payload for the deletePage mutation"""
  type DeletePagePayload {
    """
    If a &#039;clientMutationId&#039; input is provided to the mutation, it will
    be returned as output on the mutation. This ID can be used by the client to
    track the progress of mutations and catch possible duplicate mutation
    """
    clientMutationId: String
  
    """The ID of the deleted object"""
    deletedId: ID
  
    """The object before it was deleted"""
    page: Page
  }
  
  """Input for the deletePostFormat mutation"""
  input DeletePostFormatInput {
    """
    This is an ID that can be passed to a mutation by the client to track the
    progress of mutations and catch possible duplicate mutation submissions.
    """
    clientMutationId: String
  
    """The ID of the postFormat to delete"""
    id: ID!
  }
  
  """The payload for the deletePostFormat mutation"""
  type DeletePostFormatPayload {
    """
    If a &#039;clientMutationId&#039; input is provided to the mutation, it will
    be returned as output on the mutation. This ID can be used by the client to
    track the progress of mutations and catch possible duplicate mutation
    """
    clientMutationId: String
  
    """The ID of the deleted object"""
    deletedId: ID
  
    """The deteted term object"""
    postFormat: PostFormat
  }
  
  """Input for the deletePost mutation"""
  input DeletePostInput {
    """
    This is an ID that can be passed to a mutation by the client to track the
    progress of mutations and catch possible duplicate mutation submissions.
    """
    clientMutationId: String
  
    """
    Whether the object should be force deleted instead of being moved to the trash
    """
    forceDelete: Boolean
  
    """The ID of the post to delete"""
    id: ID!
  }
  
  """The payload for the deletePost mutation"""
  type DeletePostPayload {
    """
    If a &#039;clientMutationId&#039; input is provided to the mutation, it will
    be returned as output on the mutation. This ID can be used by the client to
    track the progress of mutations and catch possible duplicate mutation
    """
    clientMutationId: String
  
    """The ID of the deleted object"""
    deletedId: ID
  
    """The object before it was deleted"""
    post: Post
  }
  
  """Input for the deleteTag mutation"""
  input DeleteTagInput {
    """
    This is an ID that can be passed to a mutation by the client to track the
    progress of mutations and catch possible duplicate mutation submissions.
    """
    clientMutationId: String
  
    """The ID of the tag to delete"""
    id: ID!
  }
  
  """The payload for the deleteTag mutation"""
  type DeleteTagPayload {
    """
    If a &#039;clientMutationId&#039; input is provided to the mutation, it will
    be returned as output on the mutation. This ID can be used by the client to
    track the progress of mutations and catch possible duplicate mutation
    """
    clientMutationId: String
  
    """The ID of the deleted object"""
    deletedId: ID
  
    """The deteted term object"""
    tag: Tag
  }
  
  """Input for the deleteUser mutation"""
  input DeleteUserInput {
    """
    This is an ID that can be passed to a mutation by the client to track the
    progress of mutations and catch possible duplicate mutation submissions.
    """
    clientMutationId: String
  
    """The ID of the user you want to delete"""
    id: ID!
  
    """Reassign posts and links to new User ID."""
    reassignId: ID
  }
  
  """The payload for the deleteUser mutation"""
  type DeleteUserPayload {
    """
    If a &#039;clientMutationId&#039; input is provided to the mutation, it will
    be returned as output on the mutation. This ID can be used by the client to
    track the progress of mutations and catch possible duplicate mutation
    """
    clientMutationId: String
  
    """The ID of the user that you just deleted"""
    deletedId: ID
  
    """The deleted user object"""
    user: User
  }
  
  """The discussion setting type"""
  type DiscussionSettings {
    """Allow people to submit comments on new posts."""
    defaultCommentStatus: String
  
    """
    Allow link notifications from other blogs (pingbacks and trackbacks) on new articles.
    """
    defaultPingStatus: String
  }
  
  """Relational context between connected nodes"""
  interface Edge {
    """The connected node"""
    node: Node!
  }
  
  """Asset enqueued by the CMS"""
  interface EnqueuedAsset {
    """@todo"""
    args: Boolean
  
    """Dependencies needed to use this asset"""
    dependencies: [EnqueuedScript]
  
    """Extra information needed for the script"""
    extra: String
  
    """The handle of the enqueued asset"""
    handle: String
  
    """The ID of the enqueued asset"""
    id: ID!
  
    """The source of the asset"""
    src: String
  
    """The version of the enqueued asset"""
    version: String
  }
  
  """Script enqueued by the CMS"""
  type EnqueuedScript implements Node & EnqueuedAsset {
    """@todo"""
    args: Boolean
  
    """Dependencies needed to use this asset"""
    dependencies: [EnqueuedScript]
  
    """Extra information needed for the script"""
    extra: String
  
    """The handle of the enqueued asset"""
    handle: String
  
    """The ID of the enqueued asset"""
    id: ID!
  
    """The source of the asset"""
    src: String
  
    """The version of the enqueued asset"""
    version: String
  }
  
  """Stylesheet enqueued by the CMS"""
  type EnqueuedStylesheet implements Node & EnqueuedAsset {
    """@todo"""
    args: Boolean
  
    """Dependencies needed to use this asset"""
    dependencies: [EnqueuedScript]
  
    """Extra information needed for the script"""
    extra: String
  
    """The handle of the enqueued asset"""
    handle: String
  
    """The ID of the enqueued asset"""
    id: ID!
  
    """The source of the asset"""
    src: String
  
    """The version of the enqueued asset"""
    version: String
  }
  
  """The general setting type"""
  type GeneralSettings {
    """A date format for all date strings."""
    dateFormat: String
  
    """Site tagline."""
    description: String
  
    """This address is used for admin purposes, like new user notification."""
    email: String
  
    """WordPress locale code."""
    language: String
  
    """A day number of the week that the week should start on."""
    startOfWeek: Int
  
    """A time format for all time strings."""
    timeFormat: String
  
    """A city in the same timezone as you."""
    timezone: String
  
    """Site title."""
    title: String
  
    """Site URL."""
    url: String
  }
  
  """Content node with hierarchical (parent/child) relationships"""
  interface HierarchicalContentNode implements Node & ContentNode & UniformResourceIdentifiable & DatabaseIdentifier & HierarchicalNode {
    """
    Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root).
    """
    ancestors(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
  
      """Arguments for filtering the connection"""
      where: HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs
    ): HierarchicalContentNodeToContentNodeAncestorsConnection
  
    """
    Connection between the HierarchicalContentNode type and the ContentNode type
    """
    children(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
  
      """Arguments for filtering the connection"""
      where: HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs
    ): HierarchicalContentNodeToContentNodeChildrenConnection
  
    """Connection between the ContentNode type and the ContentType type"""
    contentType: ContentNodeToContentTypeConnectionEdge
  
    """The unique identifier stored in the database"""
    databaseId: Int!
  
    """Post publishing date."""
    date: String
  
    """The publishing date set in GMT."""
    dateGmt: String
  
    """The desired slug of the post"""
    desiredSlug: String
  
    """
    If a user has edited the node within the past 15 seconds, this will return the
    user that last edited. Null if the edit lock doesn&#039;t exist or is greater
    than 15 seconds
    """
    editingLockedBy: ContentNodeToEditLockConnectionEdge
  
    """The RSS enclosure for the object"""
    enclosure: String
  
    """Connection between the ContentNode type and the EnqueuedScript type"""
    enqueuedScripts(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
    ): ContentNodeToEnqueuedScriptConnection
  
    """
    Connection between the ContentNode type and the EnqueuedStylesheet type
    """
    enqueuedStylesheets(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
    ): ContentNodeToEnqueuedStylesheetConnection
  
    """
    The global unique identifier for this post. This currently matches the value
    stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot;
    database table.
    """
    guid: String
  
    """The globally unique ID for the object"""
    id: ID!
  
    """Whether the node is a Content Node"""
    isContentNode: Boolean!
  
    """Whether the object is a node in the preview state"""
    isPreview: Boolean
  
    """Whether the object is restricted from the current viewer"""
    isRestricted: Boolean
  
    """Whether the node is a Term"""
    isTermNode: Boolean!
  
    """The user that most recently edited the node"""
    lastEditedBy: ContentNodeToEditLastConnectionEdge
  
    """The permalink of the post"""
    link: String
  
    """
    The local modified time for a post. If a post was recently updated the
    modified field will change to match the corresponding time.
    """
    modified: String
  
    """
    The GMT modified time for a post. If a post was recently updated the modified
    field will change to match the corresponding time in GMT.
    """
    modifiedGmt: String
  
    """The parent of the node. The parent object can be of various types"""
    parent: HierarchicalContentNodeToParentContentNodeConnectionEdge
  
    """Database id of the parent node"""
    parentDatabaseId: Int
  
    """The globally unique identifier of the parent node."""
    parentId: ID
  
    """The database id of the preview node"""
    previewRevisionDatabaseId: Int
  
    """Whether the object is a node in the preview state"""
    previewRevisionId: ID
  
    """
    The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name
    field and the post_name column in the database for the
    &quot;post_objects&quot; table.
    """
    slug: String
  
    """The current status of the object"""
    status: String
  
    """The template assigned to a node of content"""
    template: ContentTemplate
  
    """The unique resource identifier path"""
    uri: String
  }
  
  """
  Connection between the HierarchicalContentNode type and the ContentNode type
  """
  type HierarchicalContentNodeToContentNodeAncestorsConnection implements ContentNodeConnection & Connection {
    """
    Edges for the HierarchicalContentNodeToContentNodeAncestorsConnection connection
    """
    edges: [HierarchicalContentNodeToContentNodeAncestorsConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [ContentNode!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type HierarchicalContentNodeToContentNodeAncestorsConnectionEdge implements Edge & ContentNodeConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: ContentNode!
  }
  
  """
  Arguments for filtering the HierarchicalContentNodeToContentNodeAncestorsConnection connection
  """
  input HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs {
    """The Types of content to filter"""
    contentTypes: [ContentTypeEnum]
  
    """Filter the connection based on dates"""
    dateQuery: DateQueryInput
  
    """
    True for objects with passwords; False for objects without passwords; null for all objects with or without passwords
    """
    hasPassword: Boolean
  
    """Specific ID of the object"""
    id: Int
  
    """Array of IDs for the objects to retrieve"""
    in: [ID]
  
    """Get objects with a specific mimeType property"""
    mimeType: MimeTypeEnum
  
    """Slug / post_name of the object"""
    name: String
  
    """Specify objects to retrieve. Use slugs"""
    nameIn: [String]
  
    """
    Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored
    """
    notIn: [ID]
  
    """What paramater to use to order the objects by."""
    orderby: [PostObjectsConnectionOrderbyInput]
  
    """Use ID to return only children. Use 0 to return only top-level items"""
    parent: ID
  
    """Specify objects whose parent is in an array"""
    parentIn: [ID]
  
    """Specify posts whose parent is not in an array"""
    parentNotIn: [ID]
  
    """Show posts with a specific password."""
    password: String
  
    """Show Posts based on a keyword search"""
    search: String
  
    """Retrieve posts where post status is in an array."""
    stati: [PostStatusEnum]
  
    """Show posts with a specific status."""
    status: PostStatusEnum
  
    """Title of the object"""
    title: String
  }
  
  """
  Connection between the HierarchicalContentNode type and the ContentNode type
  """
  type HierarchicalContentNodeToContentNodeChildrenConnection implements ContentNodeConnection & Connection {
    """
    Edges for the HierarchicalContentNodeToContentNodeChildrenConnection connection
    """
    edges: [HierarchicalContentNodeToContentNodeChildrenConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [ContentNode!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type HierarchicalContentNodeToContentNodeChildrenConnectionEdge implements Edge & ContentNodeConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: ContentNode!
  }
  
  """
  Arguments for filtering the HierarchicalContentNodeToContentNodeChildrenConnection connection
  """
  input HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs {
    """The Types of content to filter"""
    contentTypes: [ContentTypeEnum]
  
    """Filter the connection based on dates"""
    dateQuery: DateQueryInput
  
    """
    True for objects with passwords; False for objects without passwords; null for all objects with or without passwords
    """
    hasPassword: Boolean
  
    """Specific ID of the object"""
    id: Int
  
    """Array of IDs for the objects to retrieve"""
    in: [ID]
  
    """Get objects with a specific mimeType property"""
    mimeType: MimeTypeEnum
  
    """Slug / post_name of the object"""
    name: String
  
    """Specify objects to retrieve. Use slugs"""
    nameIn: [String]
  
    """
    Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored
    """
    notIn: [ID]
  
    """What paramater to use to order the objects by."""
    orderby: [PostObjectsConnectionOrderbyInput]
  
    """Use ID to return only children. Use 0 to return only top-level items"""
    parent: ID
  
    """Specify objects whose parent is in an array"""
    parentIn: [ID]
  
    """Specify posts whose parent is not in an array"""
    parentNotIn: [ID]
  
    """Show posts with a specific password."""
    password: String
  
    """Show Posts based on a keyword search"""
    search: String
  
    """Retrieve posts where post status is in an array."""
    stati: [PostStatusEnum]
  
    """Show posts with a specific status."""
    status: PostStatusEnum
  
    """Title of the object"""
    title: String
  }
  
  """
  Connection between the HierarchicalContentNode type and the ContentNode type
  """
  type HierarchicalContentNodeToParentContentNodeConnectionEdge implements SingleNodeConnectionEdge & Edge & ContentNodeConnectionEdge {
    """The node of the connection, without the edges"""
    node: ContentNode!
  }
  
  """Node with hierarchical (parent/child) relationships"""
  interface HierarchicalNode implements Node & DatabaseIdentifier {
    """The unique identifier stored in the database"""
    databaseId: Int!
  
    """The globally unique ID for the object"""
    id: ID!
  
    """Database id of the parent node"""
    parentDatabaseId: Int
  
    """The globally unique identifier of the parent node."""
    parentId: ID
  }
  
  """Term node with hierarchical (parent/child) relationships"""
  interface HierarchicalTermNode implements Node & TermNode & UniformResourceIdentifiable & DatabaseIdentifier & HierarchicalNode {
    """The number of objects connected to the object"""
    count: Int
  
    """The unique identifier stored in the database"""
    databaseId: Int!
  
    """The description of the object"""
    description: String
  
    """Connection between the TermNode type and the EnqueuedScript type"""
    enqueuedScripts(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
    ): TermNodeToEnqueuedScriptConnection
  
    """Connection between the TermNode type and the EnqueuedStylesheet type"""
    enqueuedStylesheets(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
    ): TermNodeToEnqueuedStylesheetConnection
  
    """The globally unique ID for the object"""
    id: ID!
  
    """Whether the node is a Content Node"""
    isContentNode: Boolean!
  
    """Whether the object is restricted from the current viewer"""
    isRestricted: Boolean
  
    """Whether the node is a Term"""
    isTermNode: Boolean!
  
    """The link to the term"""
    link: String
  
    """The human friendly name of the object."""
    name: String
  
    """Database id of the parent node"""
    parentDatabaseId: Int
  
    """The globally unique identifier of the parent node."""
    parentId: ID
  
    """An alphanumeric identifier for the object unique to its type."""
    slug: String
  
    """The name of the taxonomy that the object is associated with"""
    taxonomyName: String
  
    """The ID of the term group that this term object belongs to"""
    termGroupId: Int
  
    """The taxonomy ID that the object is associated with"""
    termTaxonomyId: Int
  
    """The unique resource identifier path"""
    uri: String
  }
  
  """File details for a Media Item"""
  type MediaDetails {
    """The filename of the mediaItem"""
    file: String
  
    """The height of the mediaItem"""
    height: Int
  
    """Meta information associated with the mediaItem"""
    meta: MediaItemMeta
  
    """The available sizes of the mediaItem"""
    sizes: [MediaSize]
  
    """The width of the mediaItem"""
    width: Int
  }
  
  """The mediaItem type"""
  type MediaItem implements Node & ContentNode & UniformResourceIdentifiable & DatabaseIdentifier & NodeWithTemplate & NodeWithTitle & NodeWithAuthor & NodeWithComments & HierarchicalNode {
    """Alternative text to display when resource is not displayed"""
    altText: String
  
    """Connection between the NodeWithAuthor type and the User type"""
    author: NodeWithAuthorToUserConnectionEdge
  
    """The database identifier of the author of the node"""
    authorDatabaseId: Int
  
    """The globally unique identifier of the author of the node"""
    authorId: ID
  
    """The caption for the resource"""
    caption(
      """Format of the field output"""
      format: PostObjectFieldFormatEnum
    ): String
  
    """
    The number of comments. Even though WPGraphQL denotes this field as an
    integer, in WordPress this field should be saved as a numeric string for
    """
    commentCount: Int
  
    """Whether the comments are open or closed for this particular post."""
    commentStatus: String
  
    """Connection between the mediaItem type and the Comment type"""
    comments(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
  
      """Arguments for filtering the connection"""
      where: MediaItemToCommentConnectionWhereArgs
    ): MediaItemToCommentConnection
  
    """Connection between the ContentNode type and the ContentType type"""
    contentType: ContentNodeToContentTypeConnectionEdge
  
    """The unique identifier stored in the database"""
    databaseId: Int!
  
    """Post publishing date."""
    date: String
  
    """The publishing date set in GMT."""
    dateGmt: String
  
    """Description of the image (stored as post_content)"""
    description(
      """Format of the field output"""
      format: PostObjectFieldFormatEnum
    ): String
  
    """The desired slug of the post"""
    desiredSlug: String
  
    """
    If a user has edited the node within the past 15 seconds, this will return the
    user that last edited. Null if the edit lock doesn&#039;t exist or is greater
    than 15 seconds
    """
    editingLockedBy: ContentNodeToEditLockConnectionEdge
  
    """The RSS enclosure for the object"""
    enclosure: String
  
    """Connection between the ContentNode type and the EnqueuedScript type"""
    enqueuedScripts(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
    ): ContentNodeToEnqueuedScriptConnection
  
    """
    Connection between the ContentNode type and the EnqueuedStylesheet type
    """
    enqueuedStylesheets(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
    ): ContentNodeToEnqueuedStylesheetConnection
  
    """The filesize in bytes of the resource"""
    fileSize(
      """Size of the MediaItem to return"""
      size: MediaItemSizeEnum
    ): Int
  
    """
    The global unique identifier for this post. This currently matches the value
    stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot;
    database table.
    """
    guid: String
  
    """The globally unique identifier of the attachment object."""
    id: ID!
  
    """Whether the node is a Content Node"""
    isContentNode: Boolean!
  
    """Whether the object is a node in the preview state"""
    isPreview: Boolean
  
    """Whether the object is restricted from the current viewer"""
    isRestricted: Boolean
  
    """Whether the node is a Term"""
    isTermNode: Boolean!
  
    """The user that most recently edited the node"""
    lastEditedBy: ContentNodeToEditLastConnectionEdge
  
    """The permalink of the post"""
    link: String
  
    """Details about the mediaItem"""
    mediaDetails: MediaDetails
  
    """The id field matches the WP_Post-&gt;ID field."""
    mediaItemId: Int! @deprecated(reason: "Deprecated in favor of the databaseId field")
  
    """Url of the mediaItem"""
    mediaItemUrl: String
  
    """Type of resource"""
    mediaType: String
  
    """The mime type of the mediaItem"""
    mimeType: String
  
    """
    The local modified time for a post. If a post was recently updated the
    modified field will change to match the corresponding time.
    """
    modified: String
  
    """
    The GMT modified time for a post. If a post was recently updated the modified
    field will change to match the corresponding time in GMT.
    """
    modifiedGmt: String
  
    """The parent of the node. The parent object can be of various types"""
    parent: MediaItemToParentContentNodeConnectionEdge
  
    """Database id of the parent node"""
    parentDatabaseId: Int
  
    """The globally unique identifier of the parent node."""
    parentId: ID
  
    """The database id of the preview node"""
    previewRevisionDatabaseId: Int
  
    """Whether the object is a node in the preview state"""
    previewRevisionId: ID
  
    """The sizes attribute value for an image."""
    sizes(
      """Size of the MediaItem to calculate sizes with"""
      size: MediaItemSizeEnum
    ): String
  
    """
    The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name
    field and the post_name column in the database for the
    &quot;post_objects&quot; table.
    """
    slug: String
  
    """Url of the mediaItem"""
    sourceUrl(
      """Size of the MediaItem to return"""
      size: MediaItemSizeEnum
    ): String
  
    """
    The srcset attribute specifies the URL of the image to use in different
    situations. It is a comma separated string of urls and their widths.
    """
    srcSet(
      """Size of the MediaItem to calculate srcSet with"""
      size: MediaItemSizeEnum
    ): String
  
    """The current status of the object"""
    status: String
  
    """The template assigned to the node"""
    template: ContentTemplate
  
    """
    The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
    """
    title(
      """Format of the field output"""
      format: PostObjectFieldFormatEnum
    ): String
  
    """The unique resource identifier path"""
    uri: String
  }
  
  """
  The Type of Identifier used to fetch a single resource. Default is ID.
  """
  enum MediaItemIdType {
    """Identify a resource by the Database ID."""
    DATABASE_ID
  
    """Identify a resource by the (hashed) Global ID."""
    ID
  
    """
    Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier.
    """
    SLUG
  
    """Identify a media item by its source url"""
    SOURCE_URL
  
    """Identify a resource by the URI."""
    URI
  }
  
  """Meta connected to a MediaItem"""
  type MediaItemMeta {
    """Aperture measurement of the media item."""
    aperture: Float
  
    """Information about the camera used to create the media item."""
    camera: String
  
    """The text string description associated with the media item."""
    caption: String
  
    """Copyright information associated with the media item."""
    copyright: String
  
    """The date/time when the media was created."""
    createdTimestamp: Int
  
    """The original creator of the media item."""
    credit: String
  
    """The focal length value of the media item."""
    focalLength: Float
  
    """
    The ISO (International Organization for Standardization) value of the media item.
    """
    iso: Int
  
    """List of keywords used to describe or identfy the media item."""
    keywords: [String]
  
    """The vertical or horizontal aspect of the media item."""
    orientation: String
  
    """The shutter speed information of the media item."""
    shutterSpeed: Float
  
    """A useful title for the media item."""
    title: String
  }
  
  """The size of the media item object."""
  enum MediaItemSizeEnum {
    """MediaItem with the large size"""
    LARGE
  
    """MediaItem with the medium size"""
    MEDIUM
  
    """MediaItem with the medium_large size"""
    MEDIUM_LARGE
  
    """MediaItem with the post-thumbnail size"""
    POST_THUMBNAIL
  
    """MediaItem with the thumbnail size"""
    THUMBNAIL
  
    """MediaItem with the 1536x1536 size"""
    _1536X1536
  
    """MediaItem with the 2048x2048 size"""
    _2048X2048
  }
  
  """The status of the media item object."""
  enum MediaItemStatusEnum {
    """Objects with the auto-draft status"""
    AUTO_DRAFT
  
    """Objects with the inherit status"""
    INHERIT
  
    """Objects with the private status"""
    PRIVATE
  
    """Objects with the trash status"""
    TRASH
  }
  
  """Connection between the mediaItem type and the Comment type"""
  type MediaItemToCommentConnection implements CommentConnection & Connection {
    """Edges for the MediaItemToCommentConnection connection"""
    edges: [MediaItemToCommentConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [Comment!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type MediaItemToCommentConnectionEdge implements Edge & CommentConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: Comment!
  }
  
  """Arguments for filtering the MediaItemToCommentConnection connection"""
  input MediaItemToCommentConnectionWhereArgs {
    """Comment author email address."""
    authorEmail: String
  
    """Array of author IDs to include comments for."""
    authorIn: [ID]
  
    """Array of author IDs to exclude comments for."""
    authorNotIn: [ID]
  
    """Comment author URL."""
    authorUrl: String
  
    """Array of comment IDs to include."""
    commentIn: [ID]
  
    """
    Array of IDs of users whose unapproved comments will be returned by the query regardless of status.
    """
    commentNotIn: [ID]
  
    """Include comments of a given type."""
    commentType: String
  
    """Include comments from a given array of comment types."""
    commentTypeIn: [String]
  
    """Exclude comments from a given array of comment types."""
    commentTypeNotIn: String
  
    """Content object author ID to limit results by."""
    contentAuthor: [ID]
  
    """Array of author IDs to retrieve comments for."""
    contentAuthorIn: [ID]
  
    """Array of author IDs *not* to retrieve comments for."""
    contentAuthorNotIn: [ID]
  
    """Limit results to those affiliated with a given content object ID."""
    contentId: ID
  
    """Array of content object IDs to include affiliated comments for."""
    contentIdIn: [ID]
  
    """Array of content object IDs to exclude affiliated comments for."""
    contentIdNotIn: [ID]
  
    """Content object name to retrieve affiliated comments for."""
    contentName: String
  
    """Content Object parent ID to retrieve affiliated comments for."""
    contentParent: Int
  
    """
    Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value.
    """
    contentStatus: [PostStatusEnum]
  
    """
    Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value.
    """
    contentType: [ContentTypeEnum]
  
    """
    Array of IDs or email addresses of users whose unapproved comments will be
    returned by the query regardless of $status. Default empty
    """
    includeUnapproved: [ID]
  
    """Karma score to retrieve matching comments for."""
    karma: Int
  
    """The cardinality of the order of the connection"""
    order: OrderEnum
  
    """Field to order the comments by."""
    orderby: CommentsConnectionOrderbyEnum
  
    """Parent ID of comment to retrieve children of."""
    parent: Int
  
    """Array of parent IDs of comments to retrieve children for."""
    parentIn: [ID]
  
    """Array of parent IDs of comments *not* to retrieve children for."""
    parentNotIn: [ID]
  
    """Search term(s) to retrieve matching comments for."""
    search: String
  
    """Comment status to limit results by."""
    status: String
  
    """Include comments for a specific user ID."""
    userId: ID
  }
  
  """Connection between the MediaItem type and the ContentNode type"""
  type MediaItemToParentContentNodeConnectionEdge implements SingleNodeConnectionEdge & Edge & ContentNodeConnectionEdge {
    """The node of the connection, without the edges"""
    node: ContentNode!
  }
  
  """Details of an available size for a media item"""
  type MediaSize {
    """The filename of the referenced size"""
    file: String
  
    """The filesize of the resource"""
    fileSize: Int
  
    """The height of the referenced size"""
    height: String
  
    """The mime type of the referenced size"""
    mimeType: String
  
    """The referenced size name"""
    name: String
  
    """The url of the referenced size"""
    sourceUrl: String
  
    """The width of the referenced size"""
    width: String
  }
  
  """
  Menus are the containers for navigation items. Menus can be assigned to menu
  locations, which are typically registered by the active theme.
  """
  type Menu implements Node & DatabaseIdentifier {
    """The number of items in the menu"""
    count: Int
  
    """The unique identifier stored in the database"""
    databaseId: Int!
  
    """The globally unique identifier of the nav menu object."""
    id: ID!
  
    """Whether the object is restricted from the current viewer"""
    isRestricted: Boolean
  
    """The locations a menu is assigned to"""
    locations: [MenuLocationEnum]
  
    """WP ID of the nav menu."""
    menuId: Int @deprecated(reason: "Deprecated in favor of the databaseId field")
  
    """Connection between the Menu type and the MenuItem type"""
    menuItems(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
  
      """Arguments for filtering the connection"""
      where: MenuToMenuItemConnectionWhereArgs
    ): MenuToMenuItemConnection
  
    """Display name of the menu. Equivalent to WP_Term-&gt;name."""
    name: String
  
    """The url friendly name of the menu. Equivalent to WP_Term-&gt;slug"""
    slug: String
  }
  
  """Connection to Menu Nodes"""
  interface MenuConnection implements Connection {
    """A list of edges (relational context) between connected nodes"""
    edges: [MenuConnectionEdge!]!
  
    """A list of connected Menu Nodes"""
    nodes: [Menu!]!
  }
  
  """Edge between a Node and a connected Menu Node"""
  interface MenuConnectionEdge implements Edge {
    """The connected node"""
    node: Node!
  }
  
  """
  Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu.
  """
  type MenuItem implements Node & DatabaseIdentifier {
    """Connection between the MenuItem type and the MenuItem type"""
    childItems(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
  
      """Arguments for filtering the connection"""
      where: MenuItemToMenuItemConnectionWhereArgs
    ): MenuItemToMenuItemConnection
  
    """Connection from MenuItem to it&#039;s connected node"""
    connectedNode: MenuItemToMenuItemLinkableConnectionEdge
  
    """The object connected to this menu item."""
    connectedObject: MenuItemObjectUnion @deprecated(reason: "Deprecated in favor of the connectedNode field")
  
    """Class attribute for the menu item link"""
    cssClasses: [String]
  
    """The unique identifier stored in the database"""
    databaseId: Int!
  
    """Description of the menu item."""
    description: String
  
    """The globally unique identifier of the nav menu item object."""
    id: ID!
  
    """Whether the object is restricted from the current viewer"""
    isRestricted: Boolean
  
    """Label or title of the menu item."""
    label: String
  
    """Link relationship (XFN) of the menu item."""
    linkRelationship: String
  
    """The locations the menu item&#039;s Menu is assigned to"""
    locations: [MenuLocationEnum]
  
    """The Menu a MenuItem is part of"""
    menu: MenuItemToMenuConnectionEdge
  
    """WP ID of the menu item."""
    menuItemId: Int @deprecated(reason: "Deprecated in favor of the databaseId field")
  
    """Menu item order"""
    order: Int
  
    """The database id of the parent menu item or null if it is the root"""
    parentDatabaseId: Int
  
    """The globally unique identifier of the parent nav menu item object."""
    parentId: ID
  
    """
    Path for the resource. Relative path for internal resources. Absolute path for external resources.
    """
    path: String
  
    """Target attribute for the menu item link."""
    target: String
  
    """Title attribute for the menu item link"""
    title: String
  
    """URL or destination of the menu item."""
    url: String
  }
  
  """Connection to Menu Item Nodes"""
  interface MenuItemConnection implements Connection {
    """A list of edges (relational context) between connected nodes"""
    edges: [MenuItemConnectionEdge!]!
  
    """A list of connected Menu Item Nodes"""
    nodes: [MenuItem!]!
  }
  
  """Edge between a Node and a connected Menu Item Node"""
  interface MenuItemConnectionEdge implements Edge {
    """The connected node"""
    node: Node!
  }
  
  """Nodes that can be linked to as Menu Items"""
  interface MenuItemLinkable implements Node & UniformResourceIdentifiable & DatabaseIdentifier {
    """The unique identifier stored in the database"""
    databaseId: Int!
  
    """The unique resource identifier path"""
    id: ID!
  
    """Whether the node is a Content Node"""
    isContentNode: Boolean!
  
    """Whether the node is a Term"""
    isTermNode: Boolean!
  
    """The unique resource identifier path"""
    uri: String
  }
  
  """Edge between a Node and a connected Menu Item Linkable Node"""
  interface MenuItemLinkableConnectionEdge implements Edge {
    """The connected node"""
    node: Node!
  }
  
  """
  The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field.
  """
  enum MenuItemNodeIdTypeEnum {
    """Identify a resource by the Database ID."""
    DATABASE_ID
  
    """Identify a resource by the (hashed) Global ID."""
    ID
  }
  
  """Deprecated in favor of MenuItemLinkeable Interface"""
  union MenuItemObjectUnion = Post | Page | Category | Tag | PostFormat
  
  """Connection between the MenuItem type and the Menu type"""
  type MenuItemToMenuConnectionEdge implements SingleNodeConnectionEdge & Edge {
    """The node of the connection, without the edges"""
    node: Menu!
  }
  
  """Connection between the MenuItem type and the MenuItem type"""
  type MenuItemToMenuItemConnection implements MenuItemConnection & Connection {
    """Edges for the MenuItemToMenuItemConnection connection"""
    edges: [MenuItemToMenuItemConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [MenuItem!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type MenuItemToMenuItemConnectionEdge implements Edge & MenuItemConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: MenuItem!
  }
  
  """Arguments for filtering the MenuItemToMenuItemConnection connection"""
  input MenuItemToMenuItemConnectionWhereArgs {
    """The ID of the object"""
    id: Int
  
    """The menu location for the menu being queried"""
    location: MenuLocationEnum
  
    """The database ID of the parent menu object"""
    parentDatabaseId: Int
  
    """The ID of the parent menu object"""
    parentId: ID
  }
  
  """Connection between the MenuItem type and the MenuItemLinkable type"""
  type MenuItemToMenuItemLinkableConnectionEdge implements SingleNodeConnectionEdge & Edge & MenuItemLinkableConnectionEdge {
    """The node of the connection, without the edges"""
    node: MenuItemLinkable!
  }
  
  """Registered menu locations"""
  enum MenuLocationEnum {
    """Put the menu in the footer location"""
    FOOTER
  
    """Put the menu in the primary location"""
    PRIMARY
  }
  
  """
  The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field.
  """
  enum MenuNodeIdTypeEnum {
    """Identify a menu node by the Database ID."""
    DATABASE_ID
  
    """Identify a menu node by the (hashed) Global ID."""
    ID
  
    """Identify a menu node by it's name"""
    NAME
  }
  
  """Connection between the Menu type and the MenuItem type"""
  type MenuToMenuItemConnection implements MenuItemConnection & Connection {
    """Edges for the MenuToMenuItemConnection connection"""
    edges: [MenuToMenuItemConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [MenuItem!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type MenuToMenuItemConnectionEdge implements Edge & MenuItemConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: MenuItem!
  }
  
  """Arguments for filtering the MenuToMenuItemConnection connection"""
  input MenuToMenuItemConnectionWhereArgs {
    """The ID of the object"""
    id: Int
  
    """The menu location for the menu being queried"""
    location: MenuLocationEnum
  
    """The database ID of the parent menu object"""
    parentDatabaseId: Int
  
    """The ID of the parent menu object"""
    parentId: ID
  }
  
  """The MimeType of the object"""
  enum MimeTypeEnum {
    """MimeType application/java"""
    APPLICATION_JAVA
  
    """MimeType application/msword"""
    APPLICATION_MSWORD
  
    """MimeType application/octet-stream"""
    APPLICATION_OCTET_STREAM
  
    """MimeType application/onenote"""
    APPLICATION_ONENOTE
  
    """MimeType application/oxps"""
    APPLICATION_OXPS
  
    """MimeType application/pdf"""
    APPLICATION_PDF
  
    """MimeType application/rar"""
    APPLICATION_RAR
  
    """MimeType application/rtf"""
    APPLICATION_RTF
  
    """MimeType application/ttaf+xml"""
    APPLICATION_TTAF_XML
  
    """MimeType application/vnd.apple.keynote"""
    APPLICATION_VND_APPLE_KEYNOTE
  
    """MimeType application/vnd.apple.numbers"""
    APPLICATION_VND_APPLE_NUMBERS
  
    """MimeType application/vnd.apple.pages"""
    APPLICATION_VND_APPLE_PAGES
  
    """MimeType application/vnd.ms-access"""
    APPLICATION_VND_MS_ACCESS
  
    """MimeType application/vnd.ms-excel"""
    APPLICATION_VND_MS_EXCEL
  
    """MimeType application/vnd.ms-excel.addin.macroEnabled.12"""
    APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12
  
    """MimeType application/vnd.ms-excel.sheet.binary.macroEnabled.12"""
    APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12
  
    """MimeType application/vnd.ms-excel.sheet.macroEnabled.12"""
    APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12
  
    """MimeType application/vnd.ms-excel.template.macroEnabled.12"""
    APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12
  
    """MimeType application/vnd.ms-powerpoint"""
    APPLICATION_VND_MS_POWERPOINT
  
    """MimeType application/vnd.ms-powerpoint.addin.macroEnabled.12"""
    APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12
  
    """MimeType application/vnd.ms-powerpoint.presentation.macroEnabled.12"""
    APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12
  
    """MimeType application/vnd.ms-powerpoint.slideshow.macroEnabled.12"""
    APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12
  
    """MimeType application/vnd.ms-powerpoint.slide.macroEnabled.12"""
    APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12
  
    """MimeType application/vnd.ms-powerpoint.template.macroEnabled.12"""
    APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12
  
    """MimeType application/vnd.ms-project"""
    APPLICATION_VND_MS_PROJECT
  
    """MimeType application/vnd.ms-word.document.macroEnabled.12"""
    APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12
  
    """MimeType application/vnd.ms-word.template.macroEnabled.12"""
    APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12
  
    """MimeType application/vnd.ms-write"""
    APPLICATION_VND_MS_WRITE
  
    """MimeType application/vnd.ms-xpsdocument"""
    APPLICATION_VND_MS_XPSDOCUMENT
  
    """MimeType application/vnd.oasis.opendocument.chart"""
    APPLICATION_VND_OASIS_OPENDOCUMENT_CHART
  
    """MimeType application/vnd.oasis.opendocument.database"""
    APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE
  
    """MimeType application/vnd.oasis.opendocument.formula"""
    APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA
  
    """MimeType application/vnd.oasis.opendocument.graphics"""
    APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS
  
    """MimeType application/vnd.oasis.opendocument.presentation"""
    APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION
  
    """MimeType application/vnd.oasis.opendocument.spreadsheet"""
    APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET
  
    """MimeType application/vnd.oasis.opendocument.text"""
    APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT
  
    """
    MimeType application/vnd.openxmlformats-officedocument.presentationml.presentation
    """
    APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION
  
    """
    MimeType application/vnd.openxmlformats-officedocument.presentationml.slide
    """
    APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE
  
    """
    MimeType application/vnd.openxmlformats-officedocument.presentationml.slideshow
    """
    APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW
  
    """
    MimeType application/vnd.openxmlformats-officedocument.presentationml.template
    """
    APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE
  
    """
    MimeType application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
    """
    APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET
  
    """
    MimeType application/vnd.openxmlformats-officedocument.spreadsheetml.template
    """
    APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE
  
    """
    MimeType application/vnd.openxmlformats-officedocument.wordprocessingml.document
    """
    APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT
  
    """
    MimeType application/vnd.openxmlformats-officedocument.wordprocessingml.template
    """
    APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE
  
    """MimeType application/wordperfect"""
    APPLICATION_WORDPERFECT
  
    """MimeType application/x-7z-compressed"""
    APPLICATION_X_7Z_COMPRESSED
  
    """MimeType application/x-gzip"""
    APPLICATION_X_GZIP
  
    """MimeType application/x-tar"""
    APPLICATION_X_TAR
  
    """MimeType application/zip"""
    APPLICATION_ZIP
  
    """MimeType audio/aac"""
    AUDIO_AAC
  
    """MimeType audio/flac"""
    AUDIO_FLAC
  
    """MimeType audio/midi"""
    AUDIO_MIDI
  
    """MimeType audio/mpeg"""
    AUDIO_MPEG
  
    """MimeType audio/ogg"""
    AUDIO_OGG
  
    """MimeType audio/wav"""
    AUDIO_WAV
  
    """MimeType audio/x-matroska"""
    AUDIO_X_MATROSKA
  
    """MimeType audio/x-ms-wax"""
    AUDIO_X_MS_WAX
  
    """MimeType audio/x-ms-wma"""
    AUDIO_X_MS_WMA
  
    """MimeType audio/x-realaudio"""
    AUDIO_X_REALAUDIO
  
    """MimeType image/bmp"""
    IMAGE_BMP
  
    """MimeType image/gif"""
    IMAGE_GIF
  
    """MimeType image/heic"""
    IMAGE_HEIC
  
    """MimeType image/jpeg"""
    IMAGE_JPEG
  
    """MimeType image/png"""
    IMAGE_PNG
  
    """MimeType image/tiff"""
    IMAGE_TIFF
  
    """MimeType image/webp"""
    IMAGE_WEBP
  
    """MimeType image/x-icon"""
    IMAGE_X_ICON
  
    """MimeType text/calendar"""
    TEXT_CALENDAR
  
    """MimeType text/css"""
    TEXT_CSS
  
    """MimeType text/csv"""
    TEXT_CSV
  
    """MimeType text/plain"""
    TEXT_PLAIN
  
    """MimeType text/richtext"""
    TEXT_RICHTEXT
  
    """MimeType text/tab-separated-values"""
    TEXT_TAB_SEPARATED_VALUES
  
    """MimeType text/vtt"""
    TEXT_VTT
  
    """MimeType video/3gpp"""
    VIDEO_3GPP
  
    """MimeType video/3gpp2"""
    VIDEO_3GPP2
  
    """MimeType video/avi"""
    VIDEO_AVI
  
    """MimeType video/divx"""
    VIDEO_DIVX
  
    """MimeType video/mp4"""
    VIDEO_MP4
  
    """MimeType video/mpeg"""
    VIDEO_MPEG
  
    """MimeType video/ogg"""
    VIDEO_OGG
  
    """MimeType video/quicktime"""
    VIDEO_QUICKTIME
  
    """MimeType video/webm"""
    VIDEO_WEBM
  
    """MimeType video/x-flv"""
    VIDEO_X_FLV
  
    """MimeType video/x-matroska"""
    VIDEO_X_MATROSKA
  
    """MimeType video/x-ms-asf"""
    VIDEO_X_MS_ASF
  
    """MimeType video/x-ms-wm"""
    VIDEO_X_MS_WM
  
    """MimeType video/x-ms-wmv"""
    VIDEO_X_MS_WMV
  
    """MimeType video/x-ms-wmx"""
    VIDEO_X_MS_WMX
  }
  
  """An object with an ID"""
  interface Node {
    """The globally unique ID for the object"""
    id: ID!
  }
  
  """A node that can have an author assigned to it"""
  interface NodeWithAuthor {
    """Connection between the NodeWithAuthor type and the User type"""
    author: NodeWithAuthorToUserConnectionEdge
  
    """The database identifier of the author of the node"""
    authorDatabaseId: Int
  
    """The globally unique identifier of the author of the node"""
    authorId: ID
  }
  
  """Connection between the NodeWithAuthor type and the User type"""
  type NodeWithAuthorToUserConnectionEdge implements SingleNodeConnectionEdge & Edge & UserConnectionEdge {
    """The node of the connection, without the edges"""
    node: User!
  }
  
  """A node that can have comments associated with it"""
  interface NodeWithComments {
    """
    The number of comments. Even though WPGraphQL denotes this field as an
    integer, in WordPress this field should be saved as a numeric string for
    """
    commentCount: Int
  
    """Whether the comments are open or closed for this particular post."""
    commentStatus: String
  }
  
  """A node that supports the content editor"""
  interface NodeWithContentEditor {
    """The content of the post."""
    content(
      """Format of the field output"""
      format: PostObjectFieldFormatEnum
    ): String
  }
  
  """A node that can have an excerpt"""
  interface NodeWithExcerpt {
    """The excerpt of the post."""
    excerpt(
      """Format of the field output"""
      format: PostObjectFieldFormatEnum
    ): String
  }
  
  """A node that can have a featured image set"""
  interface NodeWithFeaturedImage implements Node & ContentNode & UniformResourceIdentifiable & DatabaseIdentifier {
    """Connection between the ContentNode type and the ContentType type"""
    contentType: ContentNodeToContentTypeConnectionEdge
  
    """The unique identifier stored in the database"""
    databaseId: Int!
  
    """Post publishing date."""
    date: String
  
    """The publishing date set in GMT."""
    dateGmt: String
  
    """The desired slug of the post"""
    desiredSlug: String
  
    """
    If a user has edited the node within the past 15 seconds, this will return the
    user that last edited. Null if the edit lock doesn&#039;t exist or is greater
    than 15 seconds
    """
    editingLockedBy: ContentNodeToEditLockConnectionEdge
  
    """The RSS enclosure for the object"""
    enclosure: String
  
    """Connection between the ContentNode type and the EnqueuedScript type"""
    enqueuedScripts(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
    ): ContentNodeToEnqueuedScriptConnection
  
    """
    Connection between the ContentNode type and the EnqueuedStylesheet type
    """
    enqueuedStylesheets(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
    ): ContentNodeToEnqueuedStylesheetConnection
  
    """
    Connection between the NodeWithFeaturedImage type and the MediaItem type
    """
    featuredImage: NodeWithFeaturedImageToMediaItemConnectionEdge
  
    """
    The database identifier for the featured image node assigned to the content node
    """
    featuredImageDatabaseId: Int
  
    """Globally unique ID of the featured image assigned to the node"""
    featuredImageId: ID
  
    """
    The global unique identifier for this post. This currently matches the value
    stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot;
    database table.
    """
    guid: String
  
    """The unique resource identifier path"""
    id: ID!
  
    """Whether the node is a Content Node"""
    isContentNode: Boolean!
  
    """Whether the object is a node in the preview state"""
    isPreview: Boolean
  
    """Whether the object is restricted from the current viewer"""
    isRestricted: Boolean
  
    """Whether the node is a Term"""
    isTermNode: Boolean!
  
    """The user that most recently edited the node"""
    lastEditedBy: ContentNodeToEditLastConnectionEdge
  
    """The permalink of the post"""
    link: String
  
    """
    The local modified time for a post. If a post was recently updated the
    modified field will change to match the corresponding time.
    """
    modified: String
  
    """
    The GMT modified time for a post. If a post was recently updated the modified
    field will change to match the corresponding time in GMT.
    """
    modifiedGmt: String
  
    """The database id of the preview node"""
    previewRevisionDatabaseId: Int
  
    """Whether the object is a node in the preview state"""
    previewRevisionId: ID
  
    """
    The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name
    field and the post_name column in the database for the
    &quot;post_objects&quot; table.
    """
    slug: String
  
    """The current status of the object"""
    status: String
  
    """The template assigned to a node of content"""
    template: ContentTemplate
  
    """The unique resource identifier path"""
    uri: String
  }
  
  """
  Connection between the NodeWithFeaturedImage type and the MediaItem type
  """
  type NodeWithFeaturedImageToMediaItemConnectionEdge implements SingleNodeConnectionEdge & Edge {
    """The node of the connection, without the edges"""
    node: MediaItem!
  }
  
  """A node that can have page attributes"""
  interface NodeWithPageAttributes {
    """
    A field used for ordering posts. This is typically used with nav menu items or
    for special ordering of hierarchical content types.
    """
    menuOrder: Int
  }
  
  """A node that can have revisions"""
  interface NodeWithRevisions {
    """True if the node is a revision of another node"""
    isRevision: Boolean
  
    """
    If the current node is a revision, this field exposes the node this is a
    revision of. Returns null if the node is not a revision of another node.
    """
    revisionOf: NodeWithRevisionsToContentNodeConnectionEdge
  }
  
  """
  Connection between the NodeWithRevisions type and the ContentNode type
  """
  type NodeWithRevisionsToContentNodeConnectionEdge implements SingleNodeConnectionEdge & Edge & ContentNodeConnectionEdge {
    """The node of the connection, without the edges"""
    node: ContentNode!
  }
  
  """A node that can have a template associated with it"""
  interface NodeWithTemplate {
    """The template assigned to the node"""
    template: ContentTemplate
  }
  
  """A node that NodeWith a title"""
  interface NodeWithTitle {
    """
    The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
    """
    title(
      """Format of the field output"""
      format: PostObjectFieldFormatEnum
    ): String
  }
  
  """A node that can have trackbacks and pingbacks"""
  interface NodeWithTrackbacks {
    """Whether the pings are open or closed for this particular post."""
    pingStatus: String
  
    """URLs that have been pinged."""
    pinged: [String]
  
    """URLs queued to be pinged."""
    toPing: [String]
  }
  
  """The cardinality of the connection order"""
  enum OrderEnum {
    """Sort the query result set in an ascending order"""
    ASC
  
    """Sort the query result set in a descending order"""
    DESC
  }
  
  """The page type"""
  type Page implements Node & ContentNode & UniformResourceIdentifiable & DatabaseIdentifier & NodeWithTemplate & Previewable & NodeWithTitle & NodeWithContentEditor & NodeWithAuthor & NodeWithFeaturedImage & NodeWithComments & NodeWithRevisions & NodeWithPageAttributes & HierarchicalContentNode & HierarchicalNode & MenuItemLinkable {
    """
    Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root).
    """
    ancestors(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
  
      """Arguments for filtering the connection"""
      where: HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs
    ): HierarchicalContentNodeToContentNodeAncestorsConnection
  
    """Connection between the NodeWithAuthor type and the User type"""
    author: NodeWithAuthorToUserConnectionEdge
  
    """The database identifier of the author of the node"""
    authorDatabaseId: Int
  
    """The globally unique identifier of the author of the node"""
    authorId: ID
  
    """
    Connection between the HierarchicalContentNode type and the ContentNode type
    """
    children(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
  
      """Arguments for filtering the connection"""
      where: HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs
    ): HierarchicalContentNodeToContentNodeChildrenConnection
  
    """
    The number of comments. Even though WPGraphQL denotes this field as an
    integer, in WordPress this field should be saved as a numeric string for
    """
    commentCount: Int
  
    """Whether the comments are open or closed for this particular post."""
    commentStatus: String
  
    """Connection between the page type and the Comment type"""
    comments(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
  
      """Arguments for filtering the connection"""
      where: PageToCommentConnectionWhereArgs
    ): PageToCommentConnection
  
    """The content of the post."""
    content(
      """Format of the field output"""
      format: PostObjectFieldFormatEnum
    ): String
  
    """Connection between the ContentNode type and the ContentType type"""
    contentType: ContentNodeToContentTypeConnectionEdge
  
    """The unique identifier stored in the database"""
    databaseId: Int!
  
    """Post publishing date."""
    date: String
  
    """The publishing date set in GMT."""
    dateGmt: String
  
    """The desired slug of the post"""
    desiredSlug: String
  
    """
    If a user has edited the node within the past 15 seconds, this will return the
    user that last edited. Null if the edit lock doesn&#039;t exist or is greater
    than 15 seconds
    """
    editingLockedBy: ContentNodeToEditLockConnectionEdge
  
    """The RSS enclosure for the object"""
    enclosure: String
  
    """Connection between the ContentNode type and the EnqueuedScript type"""
    enqueuedScripts(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
    ): ContentNodeToEnqueuedScriptConnection
  
    """
    Connection between the ContentNode type and the EnqueuedStylesheet type
    """
    enqueuedStylesheets(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
    ): ContentNodeToEnqueuedStylesheetConnection
  
    """
    Connection between the NodeWithFeaturedImage type and the MediaItem type
    """
    featuredImage: NodeWithFeaturedImageToMediaItemConnectionEdge
  
    """
    The database identifier for the featured image node assigned to the content node
    """
    featuredImageDatabaseId: Int
  
    """Globally unique ID of the featured image assigned to the node"""
    featuredImageId: ID
  
    """
    The global unique identifier for this post. This currently matches the value
    stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot;
    database table.
    """
    guid: String
  
    """The globally unique identifier of the page object."""
    id: ID!
  
    """Whether the node is a Content Node"""
    isContentNode: Boolean!
  
    """Whether this page is set to the static front page."""
    isFrontPage: Boolean!
  
    """Whether this page is set to the blog posts page."""
    isPostsPage: Boolean!
  
    """Whether the object is a node in the preview state"""
    isPreview: Boolean
  
    """Whether this page is set to the privacy page."""
    isPrivacyPage: Boolean!
  
    """Whether the object is restricted from the current viewer"""
    isRestricted: Boolean
  
    """True if the node is a revision of another node"""
    isRevision: Boolean
  
    """Whether the node is a Term"""
    isTermNode: Boolean!
  
    """The user that most recently edited the node"""
    lastEditedBy: ContentNodeToEditLastConnectionEdge
  
    """The permalink of the post"""
    link: String
  
    """
    A field used for ordering posts. This is typically used with nav menu items or
    for special ordering of hierarchical content types.
    """
    menuOrder: Int
  
    """
    The local modified time for a post. If a post was recently updated the
    modified field will change to match the corresponding time.
    """
    modified: String
  
    """
    The GMT modified time for a post. If a post was recently updated the modified
    field will change to match the corresponding time in GMT.
    """
    modifiedGmt: String
  
    """The id field matches the WP_Post-&gt;ID field."""
    pageId: Int! @deprecated(reason: "Deprecated in favor of the databaseId field")
  
    """The parent of the node. The parent object can be of various types"""
    parent: HierarchicalContentNodeToParentContentNodeConnectionEdge
  
    """Database id of the parent node"""
    parentDatabaseId: Int
  
    """The globally unique identifier of the parent node."""
    parentId: ID
  
    """Connection between the page type and the page type"""
    preview: PageToPreviewConnectionEdge
  
    """The database id of the preview node"""
    previewRevisionDatabaseId: Int
  
    """Whether the object is a node in the preview state"""
    previewRevisionId: ID
  
    """
    If the current node is a revision, this field exposes the node this is a
    revision of. Returns null if the node is not a revision of another node.
    """
    revisionOf: NodeWithRevisionsToContentNodeConnectionEdge
  
    """Connection between the page type and the page type"""
    revisions(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
  
      """Arguments for filtering the connection"""
      where: PageToRevisionConnectionWhereArgs
    ): PageToRevisionConnection
  
    """
    The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name
    field and the post_name column in the database for the
    &quot;post_objects&quot; table.
    """
    slug: String
  
    """The current status of the object"""
    status: String
  
    """The template assigned to a node of content"""
    template: ContentTemplate
  
    """
    The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
    """
    title(
      """Format of the field output"""
      format: PostObjectFieldFormatEnum
    ): String
  
    """The unique resource identifier path"""
    uri: String
  }
  
  """
  The Type of Identifier used to fetch a single resource. Default is ID.
  """
  enum PageIdType {
    """Identify a resource by the Database ID."""
    DATABASE_ID
  
    """Identify a resource by the (hashed) Global ID."""
    ID
  
    """Identify a resource by the URI."""
    URI
  }
  
  """Connection between the page type and the Comment type"""
  type PageToCommentConnection implements CommentConnection & Connection {
    """Edges for the PageToCommentConnection connection"""
    edges: [PageToCommentConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [Comment!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type PageToCommentConnectionEdge implements Edge & CommentConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: Comment!
  }
  
  """Arguments for filtering the PageToCommentConnection connection"""
  input PageToCommentConnectionWhereArgs {
    """Comment author email address."""
    authorEmail: String
  
    """Array of author IDs to include comments for."""
    authorIn: [ID]
  
    """Array of author IDs to exclude comments for."""
    authorNotIn: [ID]
  
    """Comment author URL."""
    authorUrl: String
  
    """Array of comment IDs to include."""
    commentIn: [ID]
  
    """
    Array of IDs of users whose unapproved comments will be returned by the query regardless of status.
    """
    commentNotIn: [ID]
  
    """Include comments of a given type."""
    commentType: String
  
    """Include comments from a given array of comment types."""
    commentTypeIn: [String]
  
    """Exclude comments from a given array of comment types."""
    commentTypeNotIn: String
  
    """Content object author ID to limit results by."""
    contentAuthor: [ID]
  
    """Array of author IDs to retrieve comments for."""
    contentAuthorIn: [ID]
  
    """Array of author IDs *not* to retrieve comments for."""
    contentAuthorNotIn: [ID]
  
    """Limit results to those affiliated with a given content object ID."""
    contentId: ID
  
    """Array of content object IDs to include affiliated comments for."""
    contentIdIn: [ID]
  
    """Array of content object IDs to exclude affiliated comments for."""
    contentIdNotIn: [ID]
  
    """Content object name to retrieve affiliated comments for."""
    contentName: String
  
    """Content Object parent ID to retrieve affiliated comments for."""
    contentParent: Int
  
    """
    Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value.
    """
    contentStatus: [PostStatusEnum]
  
    """
    Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value.
    """
    contentType: [ContentTypeEnum]
  
    """
    Array of IDs or email addresses of users whose unapproved comments will be
    returned by the query regardless of $status. Default empty
    """
    includeUnapproved: [ID]
  
    """Karma score to retrieve matching comments for."""
    karma: Int
  
    """The cardinality of the order of the connection"""
    order: OrderEnum
  
    """Field to order the comments by."""
    orderby: CommentsConnectionOrderbyEnum
  
    """Parent ID of comment to retrieve children of."""
    parent: Int
  
    """Array of parent IDs of comments to retrieve children for."""
    parentIn: [ID]
  
    """Array of parent IDs of comments *not* to retrieve children for."""
    parentNotIn: [ID]
  
    """Search term(s) to retrieve matching comments for."""
    search: String
  
    """Comment status to limit results by."""
    status: String
  
    """Include comments for a specific user ID."""
    userId: ID
  }
  
  """Connection between the page type and the page type"""
  type PageToPreviewConnectionEdge implements SingleNodeConnectionEdge & Edge & ContentNodeConnectionEdge {
    """The node of the connection, without the edges"""
    node: Page!
  }
  
  """Connection between the page type and the page type"""
  type PageToRevisionConnection implements ContentNodeConnection & Connection {
    """Edges for the pageToRevisionConnection connection"""
    edges: [PageToRevisionConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [Page!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type PageToRevisionConnectionEdge implements Edge & ContentNodeConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: Page!
  }
  
  """Arguments for filtering the pageToRevisionConnection connection"""
  input PageToRevisionConnectionWhereArgs {
    """
    The user that's connected as the author of the object. Use the userId for the author object.
    """
    author: Int
  
    """Find objects connected to author(s) in the array of author's userIds"""
    authorIn: [ID]
  
    """Find objects connected to the author by the author's nicename"""
    authorName: String
  
    """
    Find objects NOT connected to author(s) in the array of author's userIds
    """
    authorNotIn: [ID]
  
    """Filter the connection based on dates"""
    dateQuery: DateQueryInput
  
    """
    True for objects with passwords; False for objects without passwords; null for all objects with or without passwords
    """
    hasPassword: Boolean
  
    """Specific ID of the object"""
    id: Int
  
    """Array of IDs for the objects to retrieve"""
    in: [ID]
  
    """Get objects with a specific mimeType property"""
    mimeType: MimeTypeEnum
  
    """Slug / post_name of the object"""
    name: String
  
    """Specify objects to retrieve. Use slugs"""
    nameIn: [String]
  
    """
    Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored
    """
    notIn: [ID]
  
    """What paramater to use to order the objects by."""
    orderby: [PostObjectsConnectionOrderbyInput]
  
    """Use ID to return only children. Use 0 to return only top-level items"""
    parent: ID
  
    """Specify objects whose parent is in an array"""
    parentIn: [ID]
  
    """Specify posts whose parent is not in an array"""
    parentNotIn: [ID]
  
    """Show posts with a specific password."""
    password: String
  
    """Show Posts based on a keyword search"""
    search: String
  
    """Retrieve posts where post status is in an array."""
    stati: [PostStatusEnum]
  
    """Show posts with a specific status."""
    status: PostStatusEnum
  
    """Title of the object"""
    title: String
  }
  
  """An plugin object"""
  type Plugin implements Node {
    """Name of the plugin author(s), may also be a company name."""
    author: String
  
    """URI for the related author(s)/company website."""
    authorUri: String
  
    """Description of the plugin."""
    description: String
  
    """The globally unique identifier of the plugin object."""
    id: ID!
  
    """Whether the object is restricted from the current viewer"""
    isRestricted: Boolean
  
    """Display name of the plugin."""
    name: String
  
    """Plugin path."""
    path: String
  
    """
    URI for the plugin website. This is useful for directing users for support requests etc.
    """
    pluginUri: String
  
    """Current version of the plugin."""
    version: String
  }
  
  """The post type"""
  type Post implements Node & ContentNode & UniformResourceIdentifiable & DatabaseIdentifier & NodeWithTemplate & Previewable & NodeWithTitle & NodeWithContentEditor & NodeWithAuthor & NodeWithFeaturedImage & NodeWithExcerpt & NodeWithComments & NodeWithTrackbacks & NodeWithRevisions & MenuItemLinkable {
    """Connection between the NodeWithAuthor type and the User type"""
    author: NodeWithAuthorToUserConnectionEdge
  
    """The database identifier of the author of the node"""
    authorDatabaseId: Int
  
    """The globally unique identifier of the author of the node"""
    authorId: ID
  
    """Connection between the post type and the category type"""
    categories(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
  
      """Arguments for filtering the connection"""
      where: PostToCategoryConnectionWhereArgs
    ): PostToCategoryConnection
  
    """
    The number of comments. Even though WPGraphQL denotes this field as an
    integer, in WordPress this field should be saved as a numeric string for
    """
    commentCount: Int
  
    """Whether the comments are open or closed for this particular post."""
    commentStatus: String
  
    """Connection between the post type and the Comment type"""
    comments(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
  
      """Arguments for filtering the connection"""
      where: PostToCommentConnectionWhereArgs
    ): PostToCommentConnection
  
    """The content of the post."""
    content(
      """Format of the field output"""
      format: PostObjectFieldFormatEnum
    ): String
  
    """Connection between the ContentNode type and the ContentType type"""
    contentType: ContentNodeToContentTypeConnectionEdge
  
    """The unique identifier stored in the database"""
    databaseId: Int!
  
    """Post publishing date."""
    date: String
  
    """The publishing date set in GMT."""
    dateGmt: String
  
    """The desired slug of the post"""
    desiredSlug: String
  
    """
    If a user has edited the node within the past 15 seconds, this will return the
    user that last edited. Null if the edit lock doesn&#039;t exist or is greater
    than 15 seconds
    """
    editingLockedBy: ContentNodeToEditLockConnectionEdge
  
    """The RSS enclosure for the object"""
    enclosure: String
  
    """Connection between the ContentNode type and the EnqueuedScript type"""
    enqueuedScripts(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
    ): ContentNodeToEnqueuedScriptConnection
  
    """
    Connection between the ContentNode type and the EnqueuedStylesheet type
    """
    enqueuedStylesheets(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
    ): ContentNodeToEnqueuedStylesheetConnection
  
    """The excerpt of the post."""
    excerpt(
      """Format of the field output"""
      format: PostObjectFieldFormatEnum
    ): String
  
    """
    Connection between the NodeWithFeaturedImage type and the MediaItem type
    """
    featuredImage: NodeWithFeaturedImageToMediaItemConnectionEdge
  
    """
    The database identifier for the featured image node assigned to the content node
    """
    featuredImageDatabaseId: Int
  
    """Globally unique ID of the featured image assigned to the node"""
    featuredImageId: ID
  
    """
    The global unique identifier for this post. This currently matches the value
    stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot;
    database table.
    """
    guid: String
  
    """The globally unique identifier of the post object."""
    id: ID!
  
    """Whether the node is a Content Node"""
    isContentNode: Boolean!
  
    """Whether the object is a node in the preview state"""
    isPreview: Boolean
  
    """Whether the object is restricted from the current viewer"""
    isRestricted: Boolean
  
    """True if the node is a revision of another node"""
    isRevision: Boolean
  
    """Whether this page is sticky"""
    isSticky: Boolean!
  
    """Whether the node is a Term"""
    isTermNode: Boolean!
  
    """The user that most recently edited the node"""
    lastEditedBy: ContentNodeToEditLastConnectionEdge
  
    """The permalink of the post"""
    link: String
  
    """
    The local modified time for a post. If a post was recently updated the
    modified field will change to match the corresponding time.
    """
    modified: String
  
    """
    The GMT modified time for a post. If a post was recently updated the modified
    field will change to match the corresponding time in GMT.
    """
    modifiedGmt: String
  
    """Whether the pings are open or closed for this particular post."""
    pingStatus: String
  
    """URLs that have been pinged."""
    pinged: [String]
  
    """Connection between the post type and the postFormat type"""
    postFormats(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
  
      """Arguments for filtering the connection"""
      where: PostToPostFormatConnectionWhereArgs
    ): PostToPostFormatConnection
  
    """The id field matches the WP_Post-&gt;ID field."""
    postId: Int! @deprecated(reason: "Deprecated in favor of the databaseId field")
  
    """Connection between the post type and the post type"""
    preview: PostToPreviewConnectionEdge
  
    """The database id of the preview node"""
    previewRevisionDatabaseId: Int
  
    """Whether the object is a node in the preview state"""
    previewRevisionId: ID
  
    """
    If the current node is a revision, this field exposes the node this is a
    revision of. Returns null if the node is not a revision of another node.
    """
    revisionOf: NodeWithRevisionsToContentNodeConnectionEdge
  
    """Connection between the post type and the post type"""
    revisions(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
  
      """Arguments for filtering the connection"""
      where: PostToRevisionConnectionWhereArgs
    ): PostToRevisionConnection
  
    """
    The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name
    field and the post_name column in the database for the
    &quot;post_objects&quot; table.
    """
    slug: String
  
    """The current status of the object"""
    status: String
  
    """Connection between the post type and the tag type"""
    tags(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
  
      """Arguments for filtering the connection"""
      where: PostToTagConnectionWhereArgs
    ): PostToTagConnection
  
    """The template assigned to a node of content"""
    template: ContentTemplate
  
    """Connection between the post type and the TermNode type"""
    terms(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
  
      """Arguments for filtering the connection"""
      where: PostToTermNodeConnectionWhereArgs
    ): PostToTermNodeConnection
  
    """
    The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
    """
    title(
      """Format of the field output"""
      format: PostObjectFieldFormatEnum
    ): String
  
    """URLs queued to be pinged."""
    toPing: [String]
  
    """The unique resource identifier path"""
    uri: String
  }
  
  """Set relationships between the post to categories"""
  input PostCategoriesInput {
    """
    If true, this will append the category to existing related categories. If
    false, this will replace existing relationships. Default true.
    """
    append: Boolean
  
    """The input list of items to set."""
    nodes: [PostCategoriesNodeInput]
  }
  
  """
  List of categories to connect the post to. If an ID is set, it will be used to
  create the connection. If not, it will look for a slug. If neither are valid
  existing terms, and the site is configured to allow terms to be created during
  post mutations, a term will be created using the Name if it exists in the input,
  then fallback to the slug if it exists.
  """
  input PostCategoriesNodeInput {
    """
    The description of the category. This field is used to set a description of
    the category if a new one is created during the mutation.
    """
    description: String
  
    """
    The ID of the category. If present, this will be used to connect to the post.
    If no existing category exists with this ID, no connection will be made.
    """
    id: ID
  
    """
    The name of the category. This field is used to create a new term, if term
    creation is enabled in nested mutations, and if one does not already exist
    with the provided slug or ID or if a slug or ID is not provided. If no name is
    included and a term is created, the creation will fallback to the slug field.
    """
    name: String
  
    """
    The slug of the category. If no ID is present, this field will be used to make
    a connection. If no existing term exists with this slug, this field will be
    used as a fallback to the Name field when creating a new term to connect to,
    if term creation is enabled as a nested mutation.
    """
    slug: String
  }
  
  """The postFormat type"""
  type PostFormat implements Node & TermNode & UniformResourceIdentifiable & DatabaseIdentifier & MenuItemLinkable {
    """Connection between the postFormat type and the ContentNode type"""
    contentNodes(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
  
      """Arguments for filtering the connection"""
      where: PostFormatToContentNodeConnectionWhereArgs
    ): PostFormatToContentNodeConnection
  
    """The number of objects connected to the object"""
    count: Int
  
    """The unique identifier stored in the database"""
    databaseId: Int!
  
    """The description of the object"""
    description: String
  
    """Connection between the TermNode type and the EnqueuedScript type"""
    enqueuedScripts(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
    ): TermNodeToEnqueuedScriptConnection
  
    """Connection between the TermNode type and the EnqueuedStylesheet type"""
    enqueuedStylesheets(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
    ): TermNodeToEnqueuedStylesheetConnection
  
    """The unique resource identifier path"""
    id: ID!
  
    """Whether the node is a Content Node"""
    isContentNode: Boolean!
  
    """Whether the object is restricted from the current viewer"""
    isRestricted: Boolean
  
    """Whether the node is a Term"""
    isTermNode: Boolean!
  
    """The link to the term"""
    link: String
  
    """The human friendly name of the object."""
    name: String
  
    """The id field matches the WP_Post-&gt;ID field."""
    postFormatId: Int @deprecated(reason: "Deprecated in favor of databaseId")
  
    """Connection between the postFormat type and the post type"""
    posts(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
  
      """Arguments for filtering the connection"""
      where: PostFormatToPostConnectionWhereArgs
    ): PostFormatToPostConnection
  
    """An alphanumeric identifier for the object unique to its type."""
    slug: String
  
    """Connection between the postFormat type and the Taxonomy type"""
    taxonomy: PostFormatToTaxonomyConnectionEdge
  
    """The name of the taxonomy that the object is associated with"""
    taxonomyName: String
  
    """The ID of the term group that this term object belongs to"""
    termGroupId: Int
  
    """The taxonomy ID that the object is associated with"""
    termTaxonomyId: Int
  
    """The unique resource identifier path"""
    uri: String
  }
  
  """
  The Type of Identifier used to fetch a single resource. Default is ID.
  """
  enum PostFormatIdType {
    """The Database ID for the node"""
    DATABASE_ID
  
    """The hashed Global ID"""
    ID
  
    """The name of the node"""
    NAME
  
    """Url friendly name of the node"""
    SLUG
  
    """The URI for the node"""
    URI
  }
  
  """Connection between the postFormat type and the ContentNode type"""
  type PostFormatToContentNodeConnection implements ContentNodeConnection & Connection {
    """Edges for the PostFormatToContentNodeConnection connection"""
    edges: [PostFormatToContentNodeConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [ContentNode!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type PostFormatToContentNodeConnectionEdge implements Edge & ContentNodeConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: ContentNode!
  }
  
  """
  Arguments for filtering the PostFormatToContentNodeConnection connection
  """
  input PostFormatToContentNodeConnectionWhereArgs {
    """The Types of content to filter"""
    contentTypes: [ContentTypesOfPostFormatEnum]
  
    """Filter the connection based on dates"""
    dateQuery: DateQueryInput
  
    """
    True for objects with passwords; False for objects without passwords; null for all objects with or without passwords
    """
    hasPassword: Boolean
  
    """Specific ID of the object"""
    id: Int
  
    """Array of IDs for the objects to retrieve"""
    in: [ID]
  
    """Get objects with a specific mimeType property"""
    mimeType: MimeTypeEnum
  
    """Slug / post_name of the object"""
    name: String
  
    """Specify objects to retrieve. Use slugs"""
    nameIn: [String]
  
    """
    Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored
    """
    notIn: [ID]
  
    """What paramater to use to order the objects by."""
    orderby: [PostObjectsConnectionOrderbyInput]
  
    """Use ID to return only children. Use 0 to return only top-level items"""
    parent: ID
  
    """Specify objects whose parent is in an array"""
    parentIn: [ID]
  
    """Specify posts whose parent is not in an array"""
    parentNotIn: [ID]
  
    """Show posts with a specific password."""
    password: String
  
    """Show Posts based on a keyword search"""
    search: String
  
    """Retrieve posts where post status is in an array."""
    stati: [PostStatusEnum]
  
    """Show posts with a specific status."""
    status: PostStatusEnum
  
    """Title of the object"""
    title: String
  }
  
  """Connection between the postFormat type and the post type"""
  type PostFormatToPostConnection implements ContentNodeConnection & Connection {
    """Edges for the PostFormatToPostConnection connection"""
    edges: [PostFormatToPostConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [Post!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type PostFormatToPostConnectionEdge implements Edge & ContentNodeConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: Post!
  }
  
  """Arguments for filtering the PostFormatToPostConnection connection"""
  input PostFormatToPostConnectionWhereArgs {
    """
    The user that's connected as the author of the object. Use the userId for the author object.
    """
    author: Int
  
    """Find objects connected to author(s) in the array of author's userIds"""
    authorIn: [ID]
  
    """Find objects connected to the author by the author's nicename"""
    authorName: String
  
    """
    Find objects NOT connected to author(s) in the array of author's userIds
    """
    authorNotIn: [ID]
  
    """Category ID"""
    categoryId: Int
  
    """
    Array of category IDs, used to display objects from one category OR another
    """
    categoryIn: [ID]
  
    """Use Category Slug"""
    categoryName: String
  
    """
    Array of category IDs, used to display objects from one category OR another
    """
    categoryNotIn: [ID]
  
    """Filter the connection based on dates"""
    dateQuery: DateQueryInput
  
    """
    True for objects with passwords; False for objects without passwords; null for all objects with or without passwords
    """
    hasPassword: Boolean
  
    """Specific ID of the object"""
    id: Int
  
    """Array of IDs for the objects to retrieve"""
    in: [ID]
  
    """Get objects with a specific mimeType property"""
    mimeType: MimeTypeEnum
  
    """Slug / post_name of the object"""
    name: String
  
    """Specify objects to retrieve. Use slugs"""
    nameIn: [String]
  
    """
    Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored
    """
    notIn: [ID]
  
    """What paramater to use to order the objects by."""
    orderby: [PostObjectsConnectionOrderbyInput]
  
    """Use ID to return only children. Use 0 to return only top-level items"""
    parent: ID
  
    """Specify objects whose parent is in an array"""
    parentIn: [ID]
  
    """Specify posts whose parent is not in an array"""
    parentNotIn: [ID]
  
    """Show posts with a specific password."""
    password: String
  
    """Show Posts based on a keyword search"""
    search: String
  
    """Retrieve posts where post status is in an array."""
    stati: [PostStatusEnum]
  
    """Show posts with a specific status."""
    status: PostStatusEnum
  
    """Tag Slug"""
    tag: String
  
    """Use Tag ID"""
    tagId: String
  
    """Array of tag IDs, used to display objects from one tag OR another"""
    tagIn: [ID]
  
    """Array of tag IDs, used to display objects from one tag OR another"""
    tagNotIn: [ID]
  
    """Array of tag slugs, used to display objects from one tag OR another"""
    tagSlugAnd: [String]
  
    """Array of tag slugs, used to exclude objects in specified tags"""
    tagSlugIn: [String]
  
    """Title of the object"""
    title: String
  }
  
  """Connection between the postFormat type and the Taxonomy type"""
  type PostFormatToTaxonomyConnectionEdge implements SingleNodeConnectionEdge & Edge & TaxonomyConnectionEdge {
    """The node of the connection, without the edges"""
    node: Taxonomy!
  }
  
  """
  The Type of Identifier used to fetch a single resource. Default is ID.
  """
  enum PostIdType {
    """Identify a resource by the Database ID."""
    DATABASE_ID
  
    """Identify a resource by the (hashed) Global ID."""
    ID
  
    """
    Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier.
    """
    SLUG
  
    """Identify a resource by the URI."""
    URI
  }
  
  """The format of post field data."""
  enum PostObjectFieldFormatEnum {
    """Provide the field value directly from database"""
    RAW
  
    """Apply the default WordPress rendering"""
    RENDERED
  }
  
  """The column to use when filtering by date"""
  enum PostObjectsConnectionDateColumnEnum {
    """The date the comment was created in local time."""
    DATE
  
    """The most recent modification date of the comment."""
    MODIFIED
  }
  
  """Field to order the connection by"""
  enum PostObjectsConnectionOrderbyEnum {
    """Order by author"""
    AUTHOR
  
    """Order by the number of comments it has acquired"""
    COMMENT_COUNT
  
    """Order by publish date"""
    DATE
  
    """Preserve the ID order given in the IN array"""
    IN
  
    """Order by the menu order value"""
    MENU_ORDER
  
    """Order by last modified date"""
    MODIFIED
  
    """Preserve slug order given in the NAME_IN array"""
    NAME_IN
  
    """Order by parent ID"""
    PARENT
  
    """Order by slug"""
    SLUG
  
    """Order by title"""
    TITLE
  }
  
  """Options for ordering the connection"""
  input PostObjectsConnectionOrderbyInput {
    """The field to order the connection by"""
    field: PostObjectsConnectionOrderbyEnum!
  
    """Possible directions in which to order a list of items"""
    order: OrderEnum!
  }
  
  """Set relationships between the post to postFormats"""
  input PostPostFormatsInput {
    """
    If true, this will append the postFormat to existing related postFormats. If
    false, this will replace existing relationships. Default true.
    """
    append: Boolean
  
    """The input list of items to set."""
    nodes: [PostPostFormatsNodeInput]
  }
  
  """
  List of postFormats to connect the post to. If an ID is set, it will be used to
  create the connection. If not, it will look for a slug. If neither are valid
  existing terms, and the site is configured to allow terms to be created during
  post mutations, a term will be created using the Name if it exists in the input,
  then fallback to the slug if it exists.
  """
  input PostPostFormatsNodeInput {
    """
    The description of the postFormat. This field is used to set a description of
    the postFormat if a new one is created during the mutation.
    """
    description: String
  
    """
    The ID of the postFormat. If present, this will be used to connect to the
    post. If no existing postFormat exists with this ID, no connection will be
    """
    id: ID
  
    """
    The name of the postFormat. This field is used to create a new term, if term
    creation is enabled in nested mutations, and if one does not already exist
    with the provided slug or ID or if a slug or ID is not provided. If no name is
    included and a term is created, the creation will fallback to the slug field.
    """
    name: String
  
    """
    The slug of the postFormat. If no ID is present, this field will be used to
    make a connection. If no existing term exists with this slug, this field will
    be used as a fallback to the Name field when creating a new term to connect
    to, if term creation is enabled as a nested mutation.
    """
    slug: String
  }
  
  """The status of the object."""
  enum PostStatusEnum {
    """Objects with the acf-disabled status"""
    ACF_DISABLED
  
    """Objects with the auto-draft status"""
    AUTO_DRAFT
  
    """Objects with the draft status"""
    DRAFT
  
    """Objects with the future status"""
    FUTURE
  
    """Objects with the inherit status"""
    INHERIT
  
    """Objects with the pending status"""
    PENDING
  
    """Objects with the private status"""
    PRIVATE
  
    """Objects with the publish status"""
    PUBLISH
  
    """Objects with the request-completed status"""
    REQUEST_COMPLETED
  
    """Objects with the request-confirmed status"""
    REQUEST_CONFIRMED
  
    """Objects with the request-failed status"""
    REQUEST_FAILED
  
    """Objects with the request-pending status"""
    REQUEST_PENDING
  
    """Objects with the trash status"""
    TRASH
  }
  
  """Set relationships between the post to tags"""
  input PostTagsInput {
    """
    If true, this will append the tag to existing related tags. If false, this
    will replace existing relationships. Default true.
    """
    append: Boolean
  
    """The input list of items to set."""
    nodes: [PostTagsNodeInput]
  }
  
  """
  List of tags to connect the post to. If an ID is set, it will be used to create
  the connection. If not, it will look for a slug. If neither are valid existing
  terms, and the site is configured to allow terms to be created during post
  mutations, a term will be created using the Name if it exists in the input, then
  fallback to the slug if it exists.
  """
  input PostTagsNodeInput {
    """
    The description of the tag. This field is used to set a description of the tag
    if a new one is created during the mutation.
    """
    description: String
  
    """
    The ID of the tag. If present, this will be used to connect to the post. If no
    existing tag exists with this ID, no connection will be made.
    """
    id: ID
  
    """
    The name of the tag. This field is used to create a new term, if term creation
    is enabled in nested mutations, and if one does not already exist with the
    provided slug or ID or if a slug or ID is not provided. If no name is included
    and a term is created, the creation will fallback to the slug field.
    """
    name: String
  
    """
    The slug of the tag. If no ID is present, this field will be used to make a
    connection. If no existing term exists with this slug, this field will be used
    as a fallback to the Name field when creating a new term to connect to, if
    term creation is enabled as a nested mutation.
    """
    slug: String
  }
  
  """Connection between the post type and the category type"""
  type PostToCategoryConnection implements TermNodeConnection & Connection {
    """Edges for the PostToCategoryConnection connection"""
    edges: [PostToCategoryConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [Category!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type PostToCategoryConnectionEdge implements Edge & TermNodeConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: Category!
  }
  
  """Arguments for filtering the PostToCategoryConnection connection"""
  input PostToCategoryConnectionWhereArgs {
    """
    Unique cache key to be produced when this query is stored in an object cache. Default is 'core'.
    """
    cacheDomain: String
  
    """
    Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0.
    """
    childOf: Int
  
    """
    True to limit results to terms that have no children. This parameter has no
    effect on non-hierarchical taxonomies. Default false.
    """
    childless: Boolean
  
    """
    Retrieve terms where the description is LIKE the input value. Default empty.
    """
    descriptionLike: String
  
    """
    Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array.
    """
    exclude: [ID]
  
    """
    Array of term ids to exclude along with all of their descendant terms. If
    $include is non-empty, $exclude_tree is ignored. Default empty array.
    """
    excludeTree: [ID]
  
    """
    Whether to hide terms not assigned to any posts. Accepts true or false. Default false
    """
    hideEmpty: Boolean
  
    """
    Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true.
    """
    hierarchical: Boolean
  
    """Array of term ids to include. Default empty array."""
    include: [ID]
  
    """Array of names to return term(s) for. Default empty."""
    name: [String]
  
    """Retrieve terms where the name is LIKE the input value. Default empty."""
    nameLike: String
  
    """
    Array of object IDs. Results will be limited to terms associated with these objects.
    """
    objectIds: [ID]
  
    """Direction the connection should be ordered in"""
    order: OrderEnum
  
    """Field(s) to order terms by. Defaults to 'name'."""
    orderby: TermObjectsConnectionOrderbyEnum
  
    """
    Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false.
    """
    padCounts: Boolean
  
    """Parent term ID to retrieve direct-child terms of. Default empty."""
    parent: Int
  
    """
    Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty.
    """
    search: String
  
    """Array of slugs to return term(s) for. Default empty."""
    slug: [String]
  
    """Array of term taxonomy IDs, to match when querying terms."""
    termTaxonomId: [ID]
  
    """Whether to prime meta caches for matched terms. Default true."""
    updateTermMetaCache: Boolean
  }
  
  """Connection between the post type and the Comment type"""
  type PostToCommentConnection implements CommentConnection & Connection {
    """Edges for the PostToCommentConnection connection"""
    edges: [PostToCommentConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [Comment!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type PostToCommentConnectionEdge implements Edge & CommentConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: Comment!
  }
  
  """Arguments for filtering the PostToCommentConnection connection"""
  input PostToCommentConnectionWhereArgs {
    """Comment author email address."""
    authorEmail: String
  
    """Array of author IDs to include comments for."""
    authorIn: [ID]
  
    """Array of author IDs to exclude comments for."""
    authorNotIn: [ID]
  
    """Comment author URL."""
    authorUrl: String
  
    """Array of comment IDs to include."""
    commentIn: [ID]
  
    """
    Array of IDs of users whose unapproved comments will be returned by the query regardless of status.
    """
    commentNotIn: [ID]
  
    """Include comments of a given type."""
    commentType: String
  
    """Include comments from a given array of comment types."""
    commentTypeIn: [String]
  
    """Exclude comments from a given array of comment types."""
    commentTypeNotIn: String
  
    """Content object author ID to limit results by."""
    contentAuthor: [ID]
  
    """Array of author IDs to retrieve comments for."""
    contentAuthorIn: [ID]
  
    """Array of author IDs *not* to retrieve comments for."""
    contentAuthorNotIn: [ID]
  
    """Limit results to those affiliated with a given content object ID."""
    contentId: ID
  
    """Array of content object IDs to include affiliated comments for."""
    contentIdIn: [ID]
  
    """Array of content object IDs to exclude affiliated comments for."""
    contentIdNotIn: [ID]
  
    """Content object name to retrieve affiliated comments for."""
    contentName: String
  
    """Content Object parent ID to retrieve affiliated comments for."""
    contentParent: Int
  
    """
    Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value.
    """
    contentStatus: [PostStatusEnum]
  
    """
    Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value.
    """
    contentType: [ContentTypeEnum]
  
    """
    Array of IDs or email addresses of users whose unapproved comments will be
    returned by the query regardless of $status. Default empty
    """
    includeUnapproved: [ID]
  
    """Karma score to retrieve matching comments for."""
    karma: Int
  
    """The cardinality of the order of the connection"""
    order: OrderEnum
  
    """Field to order the comments by."""
    orderby: CommentsConnectionOrderbyEnum
  
    """Parent ID of comment to retrieve children of."""
    parent: Int
  
    """Array of parent IDs of comments to retrieve children for."""
    parentIn: [ID]
  
    """Array of parent IDs of comments *not* to retrieve children for."""
    parentNotIn: [ID]
  
    """Search term(s) to retrieve matching comments for."""
    search: String
  
    """Comment status to limit results by."""
    status: String
  
    """Include comments for a specific user ID."""
    userId: ID
  }
  
  """Connection between the post type and the postFormat type"""
  type PostToPostFormatConnection implements TermNodeConnection & Connection {
    """Edges for the PostToPostFormatConnection connection"""
    edges: [PostToPostFormatConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [PostFormat!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type PostToPostFormatConnectionEdge implements Edge & TermNodeConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: PostFormat!
  }
  
  """Arguments for filtering the PostToPostFormatConnection connection"""
  input PostToPostFormatConnectionWhereArgs {
    """
    Unique cache key to be produced when this query is stored in an object cache. Default is 'core'.
    """
    cacheDomain: String
  
    """
    Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0.
    """
    childOf: Int
  
    """
    True to limit results to terms that have no children. This parameter has no
    effect on non-hierarchical taxonomies. Default false.
    """
    childless: Boolean
  
    """
    Retrieve terms where the description is LIKE the input value. Default empty.
    """
    descriptionLike: String
  
    """
    Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array.
    """
    exclude: [ID]
  
    """
    Array of term ids to exclude along with all of their descendant terms. If
    $include is non-empty, $exclude_tree is ignored. Default empty array.
    """
    excludeTree: [ID]
  
    """
    Whether to hide terms not assigned to any posts. Accepts true or false. Default false
    """
    hideEmpty: Boolean
  
    """
    Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true.
    """
    hierarchical: Boolean
  
    """Array of term ids to include. Default empty array."""
    include: [ID]
  
    """Array of names to return term(s) for. Default empty."""
    name: [String]
  
    """Retrieve terms where the name is LIKE the input value. Default empty."""
    nameLike: String
  
    """
    Array of object IDs. Results will be limited to terms associated with these objects.
    """
    objectIds: [ID]
  
    """Direction the connection should be ordered in"""
    order: OrderEnum
  
    """Field(s) to order terms by. Defaults to 'name'."""
    orderby: TermObjectsConnectionOrderbyEnum
  
    """
    Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false.
    """
    padCounts: Boolean
  
    """Parent term ID to retrieve direct-child terms of. Default empty."""
    parent: Int
  
    """
    Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty.
    """
    search: String
  
    """Array of slugs to return term(s) for. Default empty."""
    slug: [String]
  
    """Array of term taxonomy IDs, to match when querying terms."""
    termTaxonomId: [ID]
  
    """Whether to prime meta caches for matched terms. Default true."""
    updateTermMetaCache: Boolean
  }
  
  """Connection between the post type and the post type"""
  type PostToPreviewConnectionEdge implements SingleNodeConnectionEdge & Edge & ContentNodeConnectionEdge {
    """The node of the connection, without the edges"""
    node: Post!
  }
  
  """Connection between the post type and the post type"""
  type PostToRevisionConnection implements ContentNodeConnection & Connection {
    """Edges for the postToRevisionConnection connection"""
    edges: [PostToRevisionConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [Post!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type PostToRevisionConnectionEdge implements Edge & ContentNodeConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: Post!
  }
  
  """Arguments for filtering the postToRevisionConnection connection"""
  input PostToRevisionConnectionWhereArgs {
    """
    The user that's connected as the author of the object. Use the userId for the author object.
    """
    author: Int
  
    """Find objects connected to author(s) in the array of author's userIds"""
    authorIn: [ID]
  
    """Find objects connected to the author by the author's nicename"""
    authorName: String
  
    """
    Find objects NOT connected to author(s) in the array of author's userIds
    """
    authorNotIn: [ID]
  
    """Category ID"""
    categoryId: Int
  
    """
    Array of category IDs, used to display objects from one category OR another
    """
    categoryIn: [ID]
  
    """Use Category Slug"""
    categoryName: String
  
    """
    Array of category IDs, used to display objects from one category OR another
    """
    categoryNotIn: [ID]
  
    """Filter the connection based on dates"""
    dateQuery: DateQueryInput
  
    """
    True for objects with passwords; False for objects without passwords; null for all objects with or without passwords
    """
    hasPassword: Boolean
  
    """Specific ID of the object"""
    id: Int
  
    """Array of IDs for the objects to retrieve"""
    in: [ID]
  
    """Get objects with a specific mimeType property"""
    mimeType: MimeTypeEnum
  
    """Slug / post_name of the object"""
    name: String
  
    """Specify objects to retrieve. Use slugs"""
    nameIn: [String]
  
    """
    Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored
    """
    notIn: [ID]
  
    """What paramater to use to order the objects by."""
    orderby: [PostObjectsConnectionOrderbyInput]
  
    """Use ID to return only children. Use 0 to return only top-level items"""
    parent: ID
  
    """Specify objects whose parent is in an array"""
    parentIn: [ID]
  
    """Specify posts whose parent is not in an array"""
    parentNotIn: [ID]
  
    """Show posts with a specific password."""
    password: String
  
    """Show Posts based on a keyword search"""
    search: String
  
    """Retrieve posts where post status is in an array."""
    stati: [PostStatusEnum]
  
    """Show posts with a specific status."""
    status: PostStatusEnum
  
    """Tag Slug"""
    tag: String
  
    """Use Tag ID"""
    tagId: String
  
    """Array of tag IDs, used to display objects from one tag OR another"""
    tagIn: [ID]
  
    """Array of tag IDs, used to display objects from one tag OR another"""
    tagNotIn: [ID]
  
    """Array of tag slugs, used to display objects from one tag OR another"""
    tagSlugAnd: [String]
  
    """Array of tag slugs, used to exclude objects in specified tags"""
    tagSlugIn: [String]
  
    """Title of the object"""
    title: String
  }
  
  """Connection between the post type and the tag type"""
  type PostToTagConnection implements TermNodeConnection & Connection {
    """Edges for the PostToTagConnection connection"""
    edges: [PostToTagConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [Tag!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type PostToTagConnectionEdge implements Edge & TermNodeConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: Tag!
  }
  
  """Arguments for filtering the PostToTagConnection connection"""
  input PostToTagConnectionWhereArgs {
    """
    Unique cache key to be produced when this query is stored in an object cache. Default is 'core'.
    """
    cacheDomain: String
  
    """
    Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0.
    """
    childOf: Int
  
    """
    True to limit results to terms that have no children. This parameter has no
    effect on non-hierarchical taxonomies. Default false.
    """
    childless: Boolean
  
    """
    Retrieve terms where the description is LIKE the input value. Default empty.
    """
    descriptionLike: String
  
    """
    Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array.
    """
    exclude: [ID]
  
    """
    Array of term ids to exclude along with all of their descendant terms. If
    $include is non-empty, $exclude_tree is ignored. Default empty array.
    """
    excludeTree: [ID]
  
    """
    Whether to hide terms not assigned to any posts. Accepts true or false. Default false
    """
    hideEmpty: Boolean
  
    """
    Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true.
    """
    hierarchical: Boolean
  
    """Array of term ids to include. Default empty array."""
    include: [ID]
  
    """Array of names to return term(s) for. Default empty."""
    name: [String]
  
    """Retrieve terms where the name is LIKE the input value. Default empty."""
    nameLike: String
  
    """
    Array of object IDs. Results will be limited to terms associated with these objects.
    """
    objectIds: [ID]
  
    """Direction the connection should be ordered in"""
    order: OrderEnum
  
    """Field(s) to order terms by. Defaults to 'name'."""
    orderby: TermObjectsConnectionOrderbyEnum
  
    """
    Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false.
    """
    padCounts: Boolean
  
    """Parent term ID to retrieve direct-child terms of. Default empty."""
    parent: Int
  
    """
    Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty.
    """
    search: String
  
    """Array of slugs to return term(s) for. Default empty."""
    slug: [String]
  
    """Array of term taxonomy IDs, to match when querying terms."""
    termTaxonomId: [ID]
  
    """Whether to prime meta caches for matched terms. Default true."""
    updateTermMetaCache: Boolean
  }
  
  """Connection between the post type and the TermNode type"""
  type PostToTermNodeConnection implements TermNodeConnection & Connection {
    """Edges for the PostToTermNodeConnection connection"""
    edges: [PostToTermNodeConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [TermNode!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type PostToTermNodeConnectionEdge implements Edge & TermNodeConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: TermNode!
  }
  
  """Arguments for filtering the PostToTermNodeConnection connection"""
  input PostToTermNodeConnectionWhereArgs {
    """
    Unique cache key to be produced when this query is stored in an object cache. Default is 'core'.
    """
    cacheDomain: String
  
    """
    Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0.
    """
    childOf: Int
  
    """
    True to limit results to terms that have no children. This parameter has no
    effect on non-hierarchical taxonomies. Default false.
    """
    childless: Boolean
  
    """
    Retrieve terms where the description is LIKE the input value. Default empty.
    """
    descriptionLike: String
  
    """
    Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array.
    """
    exclude: [ID]
  
    """
    Array of term ids to exclude along with all of their descendant terms. If
    $include is non-empty, $exclude_tree is ignored. Default empty array.
    """
    excludeTree: [ID]
  
    """
    Whether to hide terms not assigned to any posts. Accepts true or false. Default false
    """
    hideEmpty: Boolean
  
    """
    Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true.
    """
    hierarchical: Boolean
  
    """Array of term ids to include. Default empty array."""
    include: [ID]
  
    """Array of names to return term(s) for. Default empty."""
    name: [String]
  
    """Retrieve terms where the name is LIKE the input value. Default empty."""
    nameLike: String
  
    """
    Array of object IDs. Results will be limited to terms associated with these objects.
    """
    objectIds: [ID]
  
    """Direction the connection should be ordered in"""
    order: OrderEnum
  
    """Field(s) to order terms by. Defaults to 'name'."""
    orderby: TermObjectsConnectionOrderbyEnum
  
    """
    Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false.
    """
    padCounts: Boolean
  
    """Parent term ID to retrieve direct-child terms of. Default empty."""
    parent: Int
  
    """
    Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty.
    """
    search: String
  
    """Array of slugs to return term(s) for. Default empty."""
    slug: [String]
  
    """The Taxonomy to filter terms by"""
    taxonomies: [TaxonomyEnum]
  
    """Array of term taxonomy IDs, to match when querying terms."""
    termTaxonomId: [ID]
  
    """Whether to prime meta caches for matched terms. Default true."""
    updateTermMetaCache: Boolean
  }
  
  """Details for labels of the PostType"""
  type PostTypeLabelDetails {
    """
    Default is ‘Add New’ for both hierarchical and non-hierarchical types.
    """
    addNew: String
  
    """Label for adding a new singular item."""
    addNewItem: String
  
    """Label to signify all items in a submenu link."""
    allItems: String
  
    """Label for archives in nav menus"""
    archives: String
  
    """Label for the attributes meta box."""
    attributes: String
  
    """Label for editing a singular item."""
    editItem: String
  
    """Label for the Featured Image meta box title."""
    featuredImage: String
  
    """Label for the table views hidden heading."""
    filterItemsList: String
  
    """Label for the media frame button."""
    insertIntoItem: String
  
    """Label for the table hidden heading."""
    itemsList: String
  
    """Label for the table pagination hidden heading."""
    itemsListNavigation: String
  
    """Label for the menu name."""
    menuName: String
  
    """General name for the post type, usually plural."""
    name: String
  
    """Label for the new item page title."""
    newItem: String
  
    """Label used when no items are found."""
    notFound: String
  
    """Label used when no items are in the trash."""
    notFoundInTrash: String
  
    """Label used to prefix parents of hierarchical items."""
    parentItemColon: String
  
    """Label for removing the featured image."""
    removeFeaturedImage: String
  
    """Label for searching plural items."""
    searchItems: String
  
    """Label for setting the featured image."""
    setFeaturedImage: String
  
    """Name for one object of this post type."""
    singularName: String
  
    """Label for the media frame filter."""
    uploadedToThisItem: String
  
    """Label in the media frame for using a featured image."""
    useFeaturedImage: String
  
    """Label for viewing a singular item."""
    viewItem: String
  
    """Label for viewing post type archives."""
    viewItems: String
  }
  
  """Nodes that can be seen in a preview (unpublished) state."""
  interface Previewable {
    """Whether the object is a node in the preview state"""
    isPreview: Boolean
  
    """The database id of the preview node"""
    previewRevisionDatabaseId: Int
  
    """Whether the object is a node in the preview state"""
    previewRevisionId: ID
  }
  
  """The reading setting type"""
  type ReadingSettings {
    """Blog pages show at most."""
    postsPerPage: Int
  }
  
  """Input for the registerUser mutation"""
  input RegisterUserInput {
    """User's AOL IM account."""
    aim: String
  
    """
    This is an ID that can be passed to a mutation by the client to track the
    progress of mutations and catch possible duplicate mutation submissions.
    """
    clientMutationId: String
  
    """A string containing content about the user."""
    description: String
  
    """
    A string that will be shown on the site. Defaults to user's username. It is
    likely that you will want to change this, for both appearance and security
    through obscurity (that is if you dont use and delete the default admin user).
    """
    displayName: String
  
    """A string containing the user's email address."""
    email: String
  
    """	The user's first name."""
    firstName: String
  
    """User's Jabber account."""
    jabber: String
  
    """The user's last name."""
    lastName: String
  
    """User's locale."""
    locale: String
  
    """
    A string that contains a URL-friendly name for the user. The default is the user's username.
    """
    nicename: String
  
    """The user's nickname, defaults to the user's username."""
    nickname: String
  
    """A string that contains the plain text password for the user."""
    password: String
  
    """The date the user registered. Format is Y-m-d H:i:s."""
    registered: String
  
    """
    A string for whether to enable the rich editor or not. False if not empty.
    """
    richEditing: String
  
    """A string that contains the user's username."""
    username: String!
  
    """A string containing the user's URL for the user's web site."""
    websiteUrl: String
  
    """User's Yahoo IM account."""
    yim: String
  }
  
  """The payload for the registerUser mutation"""
  type RegisterUserPayload {
    """
    If a &#039;clientMutationId&#039; input is provided to the mutation, it will
    be returned as output on the mutation. This ID can be used by the client to
    track the progress of mutations and catch possible duplicate mutation
    """
    clientMutationId: String
  
    """The User object mutation type."""
    user: User
  }
  
  """
  The logical relation between each item in the array when there are more than one.
  """
  enum RelationEnum {
    """
    The logical AND condition returns true if both operands are true, otherwise, it returns false.
    """
    AND
  
    """
    The logical OR condition returns false if both operands are false, otherwise, it returns true.
    """
    OR
  }
  
  """Input for the resetUserPassword mutation"""
  input ResetUserPasswordInput {
    """
    This is an ID that can be passed to a mutation by the client to track the
    progress of mutations and catch possible duplicate mutation submissions.
    """
    clientMutationId: String
  
    """Password reset key"""
    key: String
  
    """The user's login (username)."""
    login: String
  
    """The new password."""
    password: String
  }
  
  """The payload for the resetUserPassword mutation"""
  type ResetUserPasswordPayload {
    """
    If a &#039;clientMutationId&#039; input is provided to the mutation, it will
    be returned as output on the mutation. This ID can be used by the client to
    track the progress of mutations and catch possible duplicate mutation
    """
    clientMutationId: String
  
    """The User object mutation type."""
    user: User
  }
  
  """Input for the restoreComment mutation"""
  input RestoreCommentInput {
    """
    This is an ID that can be passed to a mutation by the client to track the
    progress of mutations and catch possible duplicate mutation submissions.
    """
    clientMutationId: String
  
    """The ID of the comment to be restored"""
    id: ID!
  }
  
  """The payload for the restoreComment mutation"""
  type RestoreCommentPayload {
    """
    If a &#039;clientMutationId&#039; input is provided to the mutation, it will
    be returned as output on the mutation. This ID can be used by the client to
    track the progress of mutations and catch possible duplicate mutation
    """
    clientMutationId: String
  
    """The restored comment object"""
    comment: Comment
  
    """The ID of the restored comment"""
    restoredId: ID
  }
  
  """The root mutation"""
  type RootMutation {
    """The payload for the createCategory mutation"""
    createCategory(
      """Input for the createCategory mutation"""
      input: CreateCategoryInput!
    ): CreateCategoryPayload
  
    """The payload for the createComment mutation"""
    createComment(
      """Input for the createComment mutation"""
      input: CreateCommentInput!
    ): CreateCommentPayload
  
    """The payload for the createMediaItem mutation"""
    createMediaItem(
      """Input for the createMediaItem mutation"""
      input: CreateMediaItemInput!
    ): CreateMediaItemPayload
  
    """The payload for the createPage mutation"""
    createPage(
      """Input for the createPage mutation"""
      input: CreatePageInput!
    ): CreatePagePayload
  
    """The payload for the createPost mutation"""
    createPost(
      """Input for the createPost mutation"""
      input: CreatePostInput!
    ): CreatePostPayload
  
    """The payload for the createPostFormat mutation"""
    createPostFormat(
      """Input for the createPostFormat mutation"""
      input: CreatePostFormatInput!
    ): CreatePostFormatPayload
  
    """The payload for the createTag mutation"""
    createTag(
      """Input for the createTag mutation"""
      input: CreateTagInput!
    ): CreateTagPayload
  
    """The payload for the createUser mutation"""
    createUser(
      """Input for the createUser mutation"""
      input: CreateUserInput!
    ): CreateUserPayload
  
    """The payload for the deleteCategory mutation"""
    deleteCategory(
      """Input for the deleteCategory mutation"""
      input: DeleteCategoryInput!
    ): DeleteCategoryPayload
  
    """The payload for the deleteComment mutation"""
    deleteComment(
      """Input for the deleteComment mutation"""
      input: DeleteCommentInput!
    ): DeleteCommentPayload
  
    """The payload for the deleteMediaItem mutation"""
    deleteMediaItem(
      """Input for the deleteMediaItem mutation"""
      input: DeleteMediaItemInput!
    ): DeleteMediaItemPayload
  
    """The payload for the deletePage mutation"""
    deletePage(
      """Input for the deletePage mutation"""
      input: DeletePageInput!
    ): DeletePagePayload
  
    """The payload for the deletePost mutation"""
    deletePost(
      """Input for the deletePost mutation"""
      input: DeletePostInput!
    ): DeletePostPayload
  
    """The payload for the deletePostFormat mutation"""
    deletePostFormat(
      """Input for the deletePostFormat mutation"""
      input: DeletePostFormatInput!
    ): DeletePostFormatPayload
  
    """The payload for the deleteTag mutation"""
    deleteTag(
      """Input for the deleteTag mutation"""
      input: DeleteTagInput!
    ): DeleteTagPayload
  
    """The payload for the deleteUser mutation"""
    deleteUser(
      """Input for the deleteUser mutation"""
      input: DeleteUserInput!
    ): DeleteUserPayload
  
    """Increase the count."""
    increaseCount(
      """The count to increase"""
      count: Int
    ): Int
  
    """The payload for the registerUser mutation"""
    registerUser(
      """Input for the registerUser mutation"""
      input: RegisterUserInput!
    ): RegisterUserPayload
  
    """The payload for the resetUserPassword mutation"""
    resetUserPassword(
      """Input for the resetUserPassword mutation"""
      input: ResetUserPasswordInput!
    ): ResetUserPasswordPayload
  
    """The payload for the restoreComment mutation"""
    restoreComment(
      """Input for the restoreComment mutation"""
      input: RestoreCommentInput!
    ): RestoreCommentPayload
  
    """The payload for the sendPasswordResetEmail mutation"""
    sendPasswordResetEmail(
      """Input for the sendPasswordResetEmail mutation"""
      input: SendPasswordResetEmailInput!
    ): SendPasswordResetEmailPayload
  
    """The payload for the UpdateCategory mutation"""
    updateCategory(
      """Input for the UpdateCategory mutation"""
      input: UpdateCategoryInput!
    ): UpdateCategoryPayload
  
    """The payload for the updateComment mutation"""
    updateComment(
      """Input for the updateComment mutation"""
      input: UpdateCommentInput!
    ): UpdateCommentPayload
  
    """The payload for the updateMediaItem mutation"""
    updateMediaItem(
      """Input for the updateMediaItem mutation"""
      input: UpdateMediaItemInput!
    ): UpdateMediaItemPayload
  
    """The payload for the updatePage mutation"""
    updatePage(
      """Input for the updatePage mutation"""
      input: UpdatePageInput!
    ): UpdatePagePayload
  
    """The payload for the updatePost mutation"""
    updatePost(
      """Input for the updatePost mutation"""
      input: UpdatePostInput!
    ): UpdatePostPayload
  
    """The payload for the UpdatePostFormat mutation"""
    updatePostFormat(
      """Input for the UpdatePostFormat mutation"""
      input: UpdatePostFormatInput!
    ): UpdatePostFormatPayload
  
    """The payload for the updateSettings mutation"""
    updateSettings(
      """Input for the updateSettings mutation"""
      input: UpdateSettingsInput!
    ): UpdateSettingsPayload
  
    """The payload for the UpdateTag mutation"""
    updateTag(
      """Input for the UpdateTag mutation"""
      input: UpdateTagInput!
    ): UpdateTagPayload
  
    """The payload for the updateUser mutation"""
    updateUser(
      """Input for the updateUser mutation"""
      input: UpdateUserInput!
    ): UpdateUserPayload
  }
  
  """The root entry point into the Graph"""
  type RootQuery {
    """Entry point to get all settings for the site"""
    allSettings: Settings
  
    """Connection between the RootQuery type and the category type"""
    categories(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
  
      """Arguments for filtering the connection"""
      where: RootQueryToCategoryConnectionWhereArgs
    ): RootQueryToCategoryConnection
  
    """A 0bject"""
    category(
      """The globally unique identifier of the object."""
      id: ID!
  
      """Type of unique identifier to fetch by. Default is Global ID"""
      idType: CategoryIdType
    ): Category
  
    """Returns a Comment"""
    comment(
      """Unique identifier for the comment node."""
      id: ID!
    ): Comment
  
    """Connection between the RootQuery type and the Comment type"""
    comments(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
  
      """Arguments for filtering the connection"""
      where: RootQueryToCommentConnectionWhereArgs
    ): RootQueryToCommentConnection
  
    """A node used to manage content"""
    contentNode(
      """Unique identifier for the content node."""
      id: ID!
  
      """
      Type of unique identifier to fetch a content node by. Default is Global ID
      """
      idType: ContentNodeIdTypeEnum
  
      """
      The content type the node is used for. Required when idType is set to "name" or "slug"
      """
      contentType: ContentTypeEnum
  
      """Whether to return the node as a preview instance"""
      asPreview: Boolean
    ): ContentNode
  
    """Connection between the RootQuery type and the ContentNode type"""
    contentNodes(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
  
      """Arguments for filtering the connection"""
      where: RootQueryToContentNodeConnectionWhereArgs
    ): RootQueryToContentNodeConnection
  
    """Fetch a Content Type node by unique Identifier"""
    contentType(
      """Unique Identifier for the Content Type node."""
      id: ID!
  
      """
      Type of unique identifier to fetch a content type by. Default is Global ID
      """
      idType: ContentTypeIdTypeEnum
    ): ContentType
  
    """Connection between the RootQuery type and the ContentType type"""
    contentTypes(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
    ): RootQueryToContentTypeConnection
  
    """Fields of the &#039;DiscussionSettings&#039; settings group"""
    discussionSettings: DiscussionSettings
  
    """Fields of the &#039;GeneralSettings&#039; settings group"""
    generalSettings: GeneralSettings
  
    """An object of the mediaItem Type. """
    mediaItem(
      """The globally unique identifier of the object."""
      id: ID!
  
      """Type of unique identifier to fetch by. Default is Global ID"""
      idType: MediaItemIdType
  
      """Whether to return the node as a preview instance"""
      asPreview: Boolean
    ): MediaItem
  
    """A mediaItem object"""
    mediaItemBy(
      """Get the object by its global ID"""
      id: ID
  
      """Get the mediaItem by its database ID"""
      mediaItemId: Int
  
      """Get the mediaItem by its uri"""
      uri: String
  
      """
      Get the mediaItem by its slug (only available for non-hierarchical types)
      """
      slug: String
    ): MediaItem @deprecated(reason: "Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)")
  
    """Connection between the RootQuery type and the mediaItem type"""
    mediaItems(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
  
      """Arguments for filtering the connection"""
      where: RootQueryToMediaItemConnectionWhereArgs
    ): RootQueryToMediaItemConnection
  
    """A WordPress navigation menu"""
    menu(
      """The globally unique identifier of the menu."""
      id: ID!
  
      """Type of unique identifier to fetch a menu by. Default is Global ID"""
      idType: MenuNodeIdTypeEnum
    ): Menu
  
    """A WordPress navigation menu item"""
    menuItem(
      """The globally unique identifier of the menu item."""
      id: ID!
  
      """
      Type of unique identifier to fetch a menu item by. Default is Global ID
      """
      idType: MenuItemNodeIdTypeEnum
    ): MenuItem
  
    """Connection between the RootQuery type and the MenuItem type"""
    menuItems(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
  
      """Arguments for filtering the connection"""
      where: RootQueryToMenuItemConnectionWhereArgs
    ): RootQueryToMenuItemConnection
  
    """Connection between the RootQuery type and the Menu type"""
    menus(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
  
      """Arguments for filtering the connection"""
      where: RootQueryToMenuConnectionWhereArgs
    ): RootQueryToMenuConnection
  
    """Fetches an object given its ID"""
    node(
      """The unique identifier of the node"""
      id: ID
    ): Node
  
    """Fetches an object given its Unique Resource Identifier"""
    nodeByUri(
      """
      Unique Resource Identifier in the form of a path or permalink for a node. Ex: "/hello-world"
      """
      uri: String!
    ): UniformResourceIdentifiable
  
    """An object of the page Type. """
    page(
      """The globally unique identifier of the object."""
      id: ID!
  
      """Type of unique identifier to fetch by. Default is Global ID"""
      idType: PageIdType
  
      """Whether to return the node as a preview instance"""
      asPreview: Boolean
    ): Page
  
    """A page object"""
    pageBy(
      """Get the object by its global ID"""
      id: ID
  
      """Get the page by its database ID"""
      pageId: Int
  
      """Get the page by its uri"""
      uri: String
    ): Page @deprecated(reason: "Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)")
  
    """Connection between the RootQuery type and the page type"""
    pages(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
  
      """Arguments for filtering the connection"""
      where: RootQueryToPageConnectionWhereArgs
    ): RootQueryToPageConnection
  
    """A WordPress plugin"""
    plugin(
      """The globally unique identifier of the plugin."""
      id: ID!
    ): Plugin
  
    """Connection between the RootQuery type and the Plugin type"""
    plugins(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
    ): RootQueryToPluginConnection
  
    """An object of the post Type. """
    post(
      """The globally unique identifier of the object."""
      id: ID!
  
      """Type of unique identifier to fetch by. Default is Global ID"""
      idType: PostIdType
  
      """Whether to return the node as a preview instance"""
      asPreview: Boolean
    ): Post
  
    """A post object"""
    postBy(
      """Get the object by its global ID"""
      id: ID
  
      """Get the post by its database ID"""
      postId: Int
  
      """Get the post by its uri"""
      uri: String
  
      """Get the post by its slug (only available for non-hierarchical types)"""
      slug: String
    ): Post @deprecated(reason: "Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)")
  
    """A 0bject"""
    postFormat(
      """The globally unique identifier of the object."""
      id: ID!
  
      """Type of unique identifier to fetch by. Default is Global ID"""
      idType: PostFormatIdType
    ): PostFormat
  
    """Connection between the RootQuery type and the postFormat type"""
    postFormats(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
  
      """Arguments for filtering the connection"""
      where: RootQueryToPostFormatConnectionWhereArgs
    ): RootQueryToPostFormatConnection
  
    """Connection between the RootQuery type and the post type"""
    posts(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
  
      """Arguments for filtering the connection"""
      where: RootQueryToPostConnectionWhereArgs
    ): RootQueryToPostConnection
  
    """Fields of the &#039;ReadingSettings&#039; settings group"""
    readingSettings: ReadingSettings
  
    """Connection between the RootQuery type and the EnqueuedScript type"""
    registeredScripts(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
    ): RootQueryToEnqueuedScriptConnection
  
    """Connection between the RootQuery type and the EnqueuedStylesheet type"""
    registeredStylesheets(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
    ): RootQueryToEnqueuedStylesheetConnection
  
    """Connection between the RootQuery type and the ContentNode type"""
    revisions(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
  
      """Arguments for filtering the connection"""
      where: RootQueryToRevisionsConnectionWhereArgs
    ): RootQueryToRevisionsConnection
  
    """A 0bject"""
    tag(
      """The globally unique identifier of the object."""
      id: ID!
  
      """Type of unique identifier to fetch by. Default is Global ID"""
      idType: TagIdType
    ): Tag
  
    """Connection between the RootQuery type and the tag type"""
    tags(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
  
      """Arguments for filtering the connection"""
      where: RootQueryToTagConnectionWhereArgs
    ): RootQueryToTagConnection
  
    """Connection between the RootQuery type and the Taxonomy type"""
    taxonomies(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
    ): RootQueryToTaxonomyConnection
  
    """Fetch a Taxonomy node by unique Identifier"""
    taxonomy(
      """Unique Identifier for the Taxonomy node."""
      id: ID!
  
      """
      Type of unique identifier to fetch a taxonomy by. Default is Global ID
      """
      idType: TaxonomyIdTypeEnum
    ): Taxonomy
  
    """A node in a taxonomy used to group and relate content nodes"""
    termNode(
      """Unique identifier for the term node."""
      id: ID!
  
      """
      Type of unique identifier to fetch a term node by. Default is Global ID
      """
      idType: TermNodeIdTypeEnum
  
      """
      The taxonomy of the tern node. Required when idType is set to "name" or "slug"
      """
      taxonomy: TaxonomyEnum
    ): TermNode
  
    """Connection between the RootQuery type and the TermNode type"""
    terms(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
  
      """Arguments for filtering the connection"""
      where: RootQueryToTermNodeConnectionWhereArgs
    ): RootQueryToTermNodeConnection
  
    """A Theme object"""
    theme(
      """The globally unique identifier of the theme."""
      id: ID!
    ): Theme
  
    """Connection between the RootQuery type and the Theme type"""
    themes(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
    ): RootQueryToThemeConnection
  
    """Returns a user"""
    user(
      """The globally unique identifier of the user."""
      id: ID!
  
      """Type of unique identifier to fetch a user by. Default is Global ID"""
      idType: UserNodeIdTypeEnum
    ): User
  
    """Returns a user role"""
    userRole(
      """The globally unique identifier of the user object."""
      id: ID!
    ): UserRole
  
    """Connection between the RootQuery type and the UserRole type"""
    userRoles(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
    ): RootQueryToUserRoleConnection
  
    """Connection between the RootQuery type and the User type"""
    users(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
  
      """Arguments for filtering the connection"""
      where: RootQueryToUserConnectionWhereArgs
    ): RootQueryToUserConnection
  
    """Returns the current user"""
    viewer: User
  
    """Fields of the &#039;WritingSettings&#039; settings group"""
    writingSettings: WritingSettings
  }
  
  """Connection between the RootQuery type and the category type"""
  type RootQueryToCategoryConnection implements TermNodeConnection & Connection {
    """Edges for the RootQueryToCategoryConnection connection"""
    edges: [RootQueryToCategoryConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [Category!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type RootQueryToCategoryConnectionEdge implements Edge & TermNodeConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: Category!
  }
  
  """Arguments for filtering the RootQueryToCategoryConnection connection"""
  input RootQueryToCategoryConnectionWhereArgs {
    """
    Unique cache key to be produced when this query is stored in an object cache. Default is 'core'.
    """
    cacheDomain: String
  
    """
    Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0.
    """
    childOf: Int
  
    """
    True to limit results to terms that have no children. This parameter has no
    effect on non-hierarchical taxonomies. Default false.
    """
    childless: Boolean
  
    """
    Retrieve terms where the description is LIKE the input value. Default empty.
    """
    descriptionLike: String
  
    """
    Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array.
    """
    exclude: [ID]
  
    """
    Array of term ids to exclude along with all of their descendant terms. If
    $include is non-empty, $exclude_tree is ignored. Default empty array.
    """
    excludeTree: [ID]
  
    """
    Whether to hide terms not assigned to any posts. Accepts true or false. Default false
    """
    hideEmpty: Boolean
  
    """
    Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true.
    """
    hierarchical: Boolean
  
    """Array of term ids to include. Default empty array."""
    include: [ID]
  
    """Array of names to return term(s) for. Default empty."""
    name: [String]
  
    """Retrieve terms where the name is LIKE the input value. Default empty."""
    nameLike: String
  
    """
    Array of object IDs. Results will be limited to terms associated with these objects.
    """
    objectIds: [ID]
  
    """Direction the connection should be ordered in"""
    order: OrderEnum
  
    """Field(s) to order terms by. Defaults to 'name'."""
    orderby: TermObjectsConnectionOrderbyEnum
  
    """
    Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false.
    """
    padCounts: Boolean
  
    """Parent term ID to retrieve direct-child terms of. Default empty."""
    parent: Int
  
    """
    Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty.
    """
    search: String
  
    """Array of slugs to return term(s) for. Default empty."""
    slug: [String]
  
    """Array of term taxonomy IDs, to match when querying terms."""
    termTaxonomId: [ID]
  
    """Whether to prime meta caches for matched terms. Default true."""
    updateTermMetaCache: Boolean
  }
  
  """Connection between the RootQuery type and the Comment type"""
  type RootQueryToCommentConnection implements CommentConnection & Connection {
    """Edges for the RootQueryToCommentConnection connection"""
    edges: [RootQueryToCommentConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [Comment!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type RootQueryToCommentConnectionEdge implements Edge & CommentConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: Comment!
  }
  
  """Arguments for filtering the RootQueryToCommentConnection connection"""
  input RootQueryToCommentConnectionWhereArgs {
    """Comment author email address."""
    authorEmail: String
  
    """Array of author IDs to include comments for."""
    authorIn: [ID]
  
    """Array of author IDs to exclude comments for."""
    authorNotIn: [ID]
  
    """Comment author URL."""
    authorUrl: String
  
    """Array of comment IDs to include."""
    commentIn: [ID]
  
    """
    Array of IDs of users whose unapproved comments will be returned by the query regardless of status.
    """
    commentNotIn: [ID]
  
    """Include comments of a given type."""
    commentType: String
  
    """Include comments from a given array of comment types."""
    commentTypeIn: [String]
  
    """Exclude comments from a given array of comment types."""
    commentTypeNotIn: String
  
    """Content object author ID to limit results by."""
    contentAuthor: [ID]
  
    """Array of author IDs to retrieve comments for."""
    contentAuthorIn: [ID]
  
    """Array of author IDs *not* to retrieve comments for."""
    contentAuthorNotIn: [ID]
  
    """Limit results to those affiliated with a given content object ID."""
    contentId: ID
  
    """Array of content object IDs to include affiliated comments for."""
    contentIdIn: [ID]
  
    """Array of content object IDs to exclude affiliated comments for."""
    contentIdNotIn: [ID]
  
    """Content object name to retrieve affiliated comments for."""
    contentName: String
  
    """Content Object parent ID to retrieve affiliated comments for."""
    contentParent: Int
  
    """
    Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value.
    """
    contentStatus: [PostStatusEnum]
  
    """
    Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value.
    """
    contentType: [ContentTypeEnum]
  
    """
    Array of IDs or email addresses of users whose unapproved comments will be
    returned by the query regardless of $status. Default empty
    """
    includeUnapproved: [ID]
  
    """Karma score to retrieve matching comments for."""
    karma: Int
  
    """The cardinality of the order of the connection"""
    order: OrderEnum
  
    """Field to order the comments by."""
    orderby: CommentsConnectionOrderbyEnum
  
    """Parent ID of comment to retrieve children of."""
    parent: Int
  
    """Array of parent IDs of comments to retrieve children for."""
    parentIn: [ID]
  
    """Array of parent IDs of comments *not* to retrieve children for."""
    parentNotIn: [ID]
  
    """Search term(s) to retrieve matching comments for."""
    search: String
  
    """Comment status to limit results by."""
    status: String
  
    """Include comments for a specific user ID."""
    userId: ID
  }
  
  """Connection between the RootQuery type and the ContentNode type"""
  type RootQueryToContentNodeConnection implements ContentNodeConnection & Connection {
    """Edges for the RootQueryToContentNodeConnection connection"""
    edges: [RootQueryToContentNodeConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [ContentNode!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type RootQueryToContentNodeConnectionEdge implements Edge & ContentNodeConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: ContentNode!
  }
  
  """
  Arguments for filtering the RootQueryToContentNodeConnection connection
  """
  input RootQueryToContentNodeConnectionWhereArgs {
    """The Types of content to filter"""
    contentTypes: [ContentTypeEnum]
  
    """Filter the connection based on dates"""
    dateQuery: DateQueryInput
  
    """
    True for objects with passwords; False for objects without passwords; null for all objects with or without passwords
    """
    hasPassword: Boolean
  
    """Specific ID of the object"""
    id: Int
  
    """Array of IDs for the objects to retrieve"""
    in: [ID]
  
    """Get objects with a specific mimeType property"""
    mimeType: MimeTypeEnum
  
    """Slug / post_name of the object"""
    name: String
  
    """Specify objects to retrieve. Use slugs"""
    nameIn: [String]
  
    """
    Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored
    """
    notIn: [ID]
  
    """What paramater to use to order the objects by."""
    orderby: [PostObjectsConnectionOrderbyInput]
  
    """Use ID to return only children. Use 0 to return only top-level items"""
    parent: ID
  
    """Specify objects whose parent is in an array"""
    parentIn: [ID]
  
    """Specify posts whose parent is not in an array"""
    parentNotIn: [ID]
  
    """Show posts with a specific password."""
    password: String
  
    """Show Posts based on a keyword search"""
    search: String
  
    """Retrieve posts where post status is in an array."""
    stati: [PostStatusEnum]
  
    """Show posts with a specific status."""
    status: PostStatusEnum
  
    """Title of the object"""
    title: String
  }
  
  """Connection between the RootQuery type and the ContentType type"""
  type RootQueryToContentTypeConnection implements ContentTypeConnection & Connection {
    """Edges for the RootQueryToContentTypeConnection connection"""
    edges: [RootQueryToContentTypeConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [ContentType!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type RootQueryToContentTypeConnectionEdge implements Edge & ContentTypeConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: ContentType!
  }
  
  """Connection between the RootQuery type and the EnqueuedScript type"""
  type RootQueryToEnqueuedScriptConnection {
    """Edges for the RootQueryToEnqueuedScriptConnection connection"""
    edges: [RootQueryToEnqueuedScriptConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [EnqueuedScript!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type RootQueryToEnqueuedScriptConnectionEdge implements Edge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: EnqueuedScript!
  }
  
  """Connection between the RootQuery type and the EnqueuedStylesheet type"""
  type RootQueryToEnqueuedStylesheetConnection {
    """Edges for the RootQueryToEnqueuedStylesheetConnection connection"""
    edges: [RootQueryToEnqueuedStylesheetConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [EnqueuedStylesheet!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type RootQueryToEnqueuedStylesheetConnectionEdge implements Edge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: EnqueuedStylesheet!
  }
  
  """Connection between the RootQuery type and the mediaItem type"""
  type RootQueryToMediaItemConnection implements ContentNodeConnection & Connection {
    """Edges for the RootQueryToMediaItemConnection connection"""
    edges: [RootQueryToMediaItemConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [MediaItem!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type RootQueryToMediaItemConnectionEdge implements Edge & ContentNodeConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: MediaItem!
  }
  
  """Arguments for filtering the RootQueryToMediaItemConnection connection"""
  input RootQueryToMediaItemConnectionWhereArgs {
    """
    The user that's connected as the author of the object. Use the userId for the author object.
    """
    author: Int
  
    """Find objects connected to author(s) in the array of author's userIds"""
    authorIn: [ID]
  
    """Find objects connected to the author by the author's nicename"""
    authorName: String
  
    """
    Find objects NOT connected to author(s) in the array of author's userIds
    """
    authorNotIn: [ID]
  
    """Filter the connection based on dates"""
    dateQuery: DateQueryInput
  
    """
    True for objects with passwords; False for objects without passwords; null for all objects with or without passwords
    """
    hasPassword: Boolean
  
    """Specific ID of the object"""
    id: Int
  
    """Array of IDs for the objects to retrieve"""
    in: [ID]
  
    """Get objects with a specific mimeType property"""
    mimeType: MimeTypeEnum
  
    """Slug / post_name of the object"""
    name: String
  
    """Specify objects to retrieve. Use slugs"""
    nameIn: [String]
  
    """
    Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored
    """
    notIn: [ID]
  
    """What paramater to use to order the objects by."""
    orderby: [PostObjectsConnectionOrderbyInput]
  
    """Use ID to return only children. Use 0 to return only top-level items"""
    parent: ID
  
    """Specify objects whose parent is in an array"""
    parentIn: [ID]
  
    """Specify posts whose parent is not in an array"""
    parentNotIn: [ID]
  
    """Show posts with a specific password."""
    password: String
  
    """Show Posts based on a keyword search"""
    search: String
  
    """Retrieve posts where post status is in an array."""
    stati: [PostStatusEnum]
  
    """Show posts with a specific status."""
    status: PostStatusEnum
  
    """Title of the object"""
    title: String
  }
  
  """Connection between the RootQuery type and the Menu type"""
  type RootQueryToMenuConnection implements MenuConnection & Connection {
    """Edges for the RootQueryToMenuConnection connection"""
    edges: [RootQueryToMenuConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [Menu!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type RootQueryToMenuConnectionEdge implements Edge & MenuConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: Menu!
  }
  
  """Arguments for filtering the RootQueryToMenuConnection connection"""
  input RootQueryToMenuConnectionWhereArgs {
    """The ID of the object"""
    id: Int
  
    """The menu location for the menu being queried"""
    location: MenuLocationEnum
  
    """The slug of the menu to query items for"""
    slug: String
  }
  
  """Connection between the RootQuery type and the MenuItem type"""
  type RootQueryToMenuItemConnection implements MenuItemConnection & Connection {
    """Edges for the RootQueryToMenuItemConnection connection"""
    edges: [RootQueryToMenuItemConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [MenuItem!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type RootQueryToMenuItemConnectionEdge implements Edge & MenuItemConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: MenuItem!
  }
  
  """Arguments for filtering the RootQueryToMenuItemConnection connection"""
  input RootQueryToMenuItemConnectionWhereArgs {
    """The ID of the object"""
    id: Int
  
    """The menu location for the menu being queried"""
    location: MenuLocationEnum
  
    """The database ID of the parent menu object"""
    parentDatabaseId: Int
  
    """The ID of the parent menu object"""
    parentId: ID
  }
  
  """Connection between the RootQuery type and the page type"""
  type RootQueryToPageConnection implements ContentNodeConnection & Connection {
    """Edges for the RootQueryToPageConnection connection"""
    edges: [RootQueryToPageConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [Page!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type RootQueryToPageConnectionEdge implements Edge & ContentNodeConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: Page!
  }
  
  """Arguments for filtering the RootQueryToPageConnection connection"""
  input RootQueryToPageConnectionWhereArgs {
    """
    The user that's connected as the author of the object. Use the userId for the author object.
    """
    author: Int
  
    """Find objects connected to author(s) in the array of author's userIds"""
    authorIn: [ID]
  
    """Find objects connected to the author by the author's nicename"""
    authorName: String
  
    """
    Find objects NOT connected to author(s) in the array of author's userIds
    """
    authorNotIn: [ID]
  
    """Filter the connection based on dates"""
    dateQuery: DateQueryInput
  
    """
    True for objects with passwords; False for objects without passwords; null for all objects with or without passwords
    """
    hasPassword: Boolean
  
    """Specific ID of the object"""
    id: Int
  
    """Array of IDs for the objects to retrieve"""
    in: [ID]
  
    """Get objects with a specific mimeType property"""
    mimeType: MimeTypeEnum
  
    """Slug / post_name of the object"""
    name: String
  
    """Specify objects to retrieve. Use slugs"""
    nameIn: [String]
  
    """
    Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored
    """
    notIn: [ID]
  
    """What paramater to use to order the objects by."""
    orderby: [PostObjectsConnectionOrderbyInput]
  
    """Use ID to return only children. Use 0 to return only top-level items"""
    parent: ID
  
    """Specify objects whose parent is in an array"""
    parentIn: [ID]
  
    """Specify posts whose parent is not in an array"""
    parentNotIn: [ID]
  
    """Show posts with a specific password."""
    password: String
  
    """Show Posts based on a keyword search"""
    search: String
  
    """Retrieve posts where post status is in an array."""
    stati: [PostStatusEnum]
  
    """Show posts with a specific status."""
    status: PostStatusEnum
  
    """Title of the object"""
    title: String
  }
  
  """Connection between the RootQuery type and the Plugin type"""
  type RootQueryToPluginConnection {
    """Edges for the RootQueryToPluginConnection connection"""
    edges: [RootQueryToPluginConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [Plugin!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type RootQueryToPluginConnectionEdge implements Edge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: Plugin!
  }
  
  """Connection between the RootQuery type and the post type"""
  type RootQueryToPostConnection implements ContentNodeConnection & Connection {
    """Edges for the RootQueryToPostConnection connection"""
    edges: [RootQueryToPostConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [Post!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type RootQueryToPostConnectionEdge implements Edge & ContentNodeConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: Post!
  }
  
  """Arguments for filtering the RootQueryToPostConnection connection"""
  input RootQueryToPostConnectionWhereArgs {
    """
    The user that's connected as the author of the object. Use the userId for the author object.
    """
    author: Int
  
    """Find objects connected to author(s) in the array of author's userIds"""
    authorIn: [ID]
  
    """Find objects connected to the author by the author's nicename"""
    authorName: String
  
    """
    Find objects NOT connected to author(s) in the array of author's userIds
    """
    authorNotIn: [ID]
  
    """Category ID"""
    categoryId: Int
  
    """
    Array of category IDs, used to display objects from one category OR another
    """
    categoryIn: [ID]
  
    """Use Category Slug"""
    categoryName: String
  
    """
    Array of category IDs, used to display objects from one category OR another
    """
    categoryNotIn: [ID]
  
    """Filter the connection based on dates"""
    dateQuery: DateQueryInput
  
    """
    True for objects with passwords; False for objects without passwords; null for all objects with or without passwords
    """
    hasPassword: Boolean
  
    """Specific ID of the object"""
    id: Int
  
    """Array of IDs for the objects to retrieve"""
    in: [ID]
  
    """Get objects with a specific mimeType property"""
    mimeType: MimeTypeEnum
  
    """Slug / post_name of the object"""
    name: String
  
    """Specify objects to retrieve. Use slugs"""
    nameIn: [String]
  
    """
    Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored
    """
    notIn: [ID]
  
    """What paramater to use to order the objects by."""
    orderby: [PostObjectsConnectionOrderbyInput]
  
    """Use ID to return only children. Use 0 to return only top-level items"""
    parent: ID
  
    """Specify objects whose parent is in an array"""
    parentIn: [ID]
  
    """Specify posts whose parent is not in an array"""
    parentNotIn: [ID]
  
    """Show posts with a specific password."""
    password: String
  
    """Show Posts based on a keyword search"""
    search: String
  
    """Retrieve posts where post status is in an array."""
    stati: [PostStatusEnum]
  
    """Show posts with a specific status."""
    status: PostStatusEnum
  
    """Tag Slug"""
    tag: String
  
    """Use Tag ID"""
    tagId: String
  
    """Array of tag IDs, used to display objects from one tag OR another"""
    tagIn: [ID]
  
    """Array of tag IDs, used to display objects from one tag OR another"""
    tagNotIn: [ID]
  
    """Array of tag slugs, used to display objects from one tag OR another"""
    tagSlugAnd: [String]
  
    """Array of tag slugs, used to exclude objects in specified tags"""
    tagSlugIn: [String]
  
    """Title of the object"""
    title: String
  }
  
  """Connection between the RootQuery type and the postFormat type"""
  type RootQueryToPostFormatConnection implements TermNodeConnection & Connection {
    """Edges for the RootQueryToPostFormatConnection connection"""
    edges: [RootQueryToPostFormatConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [PostFormat!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type RootQueryToPostFormatConnectionEdge implements Edge & TermNodeConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: PostFormat!
  }
  
  """
  Arguments for filtering the RootQueryToPostFormatConnection connection
  """
  input RootQueryToPostFormatConnectionWhereArgs {
    """
    Unique cache key to be produced when this query is stored in an object cache. Default is 'core'.
    """
    cacheDomain: String
  
    """
    Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0.
    """
    childOf: Int
  
    """
    True to limit results to terms that have no children. This parameter has no
    effect on non-hierarchical taxonomies. Default false.
    """
    childless: Boolean
  
    """
    Retrieve terms where the description is LIKE the input value. Default empty.
    """
    descriptionLike: String
  
    """
    Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array.
    """
    exclude: [ID]
  
    """
    Array of term ids to exclude along with all of their descendant terms. If
    $include is non-empty, $exclude_tree is ignored. Default empty array.
    """
    excludeTree: [ID]
  
    """
    Whether to hide terms not assigned to any posts. Accepts true or false. Default false
    """
    hideEmpty: Boolean
  
    """
    Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true.
    """
    hierarchical: Boolean
  
    """Array of term ids to include. Default empty array."""
    include: [ID]
  
    """Array of names to return term(s) for. Default empty."""
    name: [String]
  
    """Retrieve terms where the name is LIKE the input value. Default empty."""
    nameLike: String
  
    """
    Array of object IDs. Results will be limited to terms associated with these objects.
    """
    objectIds: [ID]
  
    """Direction the connection should be ordered in"""
    order: OrderEnum
  
    """Field(s) to order terms by. Defaults to 'name'."""
    orderby: TermObjectsConnectionOrderbyEnum
  
    """
    Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false.
    """
    padCounts: Boolean
  
    """Parent term ID to retrieve direct-child terms of. Default empty."""
    parent: Int
  
    """
    Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty.
    """
    search: String
  
    """Array of slugs to return term(s) for. Default empty."""
    slug: [String]
  
    """Array of term taxonomy IDs, to match when querying terms."""
    termTaxonomId: [ID]
  
    """Whether to prime meta caches for matched terms. Default true."""
    updateTermMetaCache: Boolean
  }
  
  """Connection between the RootQuery type and the ContentNode type"""
  type RootQueryToRevisionsConnection {
    """Edges for the RootQueryToRevisionsConnection connection"""
    edges: [RootQueryToRevisionsConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [ContentNode!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type RootQueryToRevisionsConnectionEdge implements Edge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: ContentNode!
  }
  
  """Arguments for filtering the RootQueryToRevisionsConnection connection"""
  input RootQueryToRevisionsConnectionWhereArgs {
    """The Types of content to filter"""
    contentTypes: [ContentTypeEnum]
  
    """Filter the connection based on dates"""
    dateQuery: DateQueryInput
  
    """
    True for objects with passwords; False for objects without passwords; null for all objects with or without passwords
    """
    hasPassword: Boolean
  
    """Specific ID of the object"""
    id: Int
  
    """Array of IDs for the objects to retrieve"""
    in: [ID]
  
    """Get objects with a specific mimeType property"""
    mimeType: MimeTypeEnum
  
    """Slug / post_name of the object"""
    name: String
  
    """Specify objects to retrieve. Use slugs"""
    nameIn: [String]
  
    """
    Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored
    """
    notIn: [ID]
  
    """What paramater to use to order the objects by."""
    orderby: [PostObjectsConnectionOrderbyInput]
  
    """Use ID to return only children. Use 0 to return only top-level items"""
    parent: ID
  
    """Specify objects whose parent is in an array"""
    parentIn: [ID]
  
    """Specify posts whose parent is not in an array"""
    parentNotIn: [ID]
  
    """Show posts with a specific password."""
    password: String
  
    """Show Posts based on a keyword search"""
    search: String
  
    """Retrieve posts where post status is in an array."""
    stati: [PostStatusEnum]
  
    """Show posts with a specific status."""
    status: PostStatusEnum
  
    """Title of the object"""
    title: String
  }
  
  """Connection between the RootQuery type and the tag type"""
  type RootQueryToTagConnection implements TermNodeConnection & Connection {
    """Edges for the RootQueryToTagConnection connection"""
    edges: [RootQueryToTagConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [Tag!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type RootQueryToTagConnectionEdge implements Edge & TermNodeConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: Tag!
  }
  
  """Arguments for filtering the RootQueryToTagConnection connection"""
  input RootQueryToTagConnectionWhereArgs {
    """
    Unique cache key to be produced when this query is stored in an object cache. Default is 'core'.
    """
    cacheDomain: String
  
    """
    Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0.
    """
    childOf: Int
  
    """
    True to limit results to terms that have no children. This parameter has no
    effect on non-hierarchical taxonomies. Default false.
    """
    childless: Boolean
  
    """
    Retrieve terms where the description is LIKE the input value. Default empty.
    """
    descriptionLike: String
  
    """
    Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array.
    """
    exclude: [ID]
  
    """
    Array of term ids to exclude along with all of their descendant terms. If
    $include is non-empty, $exclude_tree is ignored. Default empty array.
    """
    excludeTree: [ID]
  
    """
    Whether to hide terms not assigned to any posts. Accepts true or false. Default false
    """
    hideEmpty: Boolean
  
    """
    Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true.
    """
    hierarchical: Boolean
  
    """Array of term ids to include. Default empty array."""
    include: [ID]
  
    """Array of names to return term(s) for. Default empty."""
    name: [String]
  
    """Retrieve terms where the name is LIKE the input value. Default empty."""
    nameLike: String
  
    """
    Array of object IDs. Results will be limited to terms associated with these objects.
    """
    objectIds: [ID]
  
    """Direction the connection should be ordered in"""
    order: OrderEnum
  
    """Field(s) to order terms by. Defaults to 'name'."""
    orderby: TermObjectsConnectionOrderbyEnum
  
    """
    Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false.
    """
    padCounts: Boolean
  
    """Parent term ID to retrieve direct-child terms of. Default empty."""
    parent: Int
  
    """
    Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty.
    """
    search: String
  
    """Array of slugs to return term(s) for. Default empty."""
    slug: [String]
  
    """Array of term taxonomy IDs, to match when querying terms."""
    termTaxonomId: [ID]
  
    """Whether to prime meta caches for matched terms. Default true."""
    updateTermMetaCache: Boolean
  }
  
  """Connection between the RootQuery type and the Taxonomy type"""
  type RootQueryToTaxonomyConnection implements TaxonomyConnection & Connection {
    """Edges for the RootQueryToTaxonomyConnection connection"""
    edges: [RootQueryToTaxonomyConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [Taxonomy!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type RootQueryToTaxonomyConnectionEdge implements Edge & TaxonomyConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: Taxonomy!
  }
  
  """Connection between the RootQuery type and the TermNode type"""
  type RootQueryToTermNodeConnection implements TermNodeConnection & Connection {
    """Edges for the RootQueryToTermNodeConnection connection"""
    edges: [RootQueryToTermNodeConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [TermNode!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type RootQueryToTermNodeConnectionEdge implements Edge & TermNodeConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: TermNode!
  }
  
  """Arguments for filtering the RootQueryToTermNodeConnection connection"""
  input RootQueryToTermNodeConnectionWhereArgs {
    """
    Unique cache key to be produced when this query is stored in an object cache. Default is 'core'.
    """
    cacheDomain: String
  
    """
    Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0.
    """
    childOf: Int
  
    """
    True to limit results to terms that have no children. This parameter has no
    effect on non-hierarchical taxonomies. Default false.
    """
    childless: Boolean
  
    """
    Retrieve terms where the description is LIKE the input value. Default empty.
    """
    descriptionLike: String
  
    """
    Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array.
    """
    exclude: [ID]
  
    """
    Array of term ids to exclude along with all of their descendant terms. If
    $include is non-empty, $exclude_tree is ignored. Default empty array.
    """
    excludeTree: [ID]
  
    """
    Whether to hide terms not assigned to any posts. Accepts true or false. Default false
    """
    hideEmpty: Boolean
  
    """
    Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true.
    """
    hierarchical: Boolean
  
    """Array of term ids to include. Default empty array."""
    include: [ID]
  
    """Array of names to return term(s) for. Default empty."""
    name: [String]
  
    """Retrieve terms where the name is LIKE the input value. Default empty."""
    nameLike: String
  
    """
    Array of object IDs. Results will be limited to terms associated with these objects.
    """
    objectIds: [ID]
  
    """Direction the connection should be ordered in"""
    order: OrderEnum
  
    """Field(s) to order terms by. Defaults to 'name'."""
    orderby: TermObjectsConnectionOrderbyEnum
  
    """
    Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false.
    """
    padCounts: Boolean
  
    """Parent term ID to retrieve direct-child terms of. Default empty."""
    parent: Int
  
    """
    Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty.
    """
    search: String
  
    """Array of slugs to return term(s) for. Default empty."""
    slug: [String]
  
    """The Taxonomy to filter terms by"""
    taxonomies: [TaxonomyEnum]
  
    """Array of term taxonomy IDs, to match when querying terms."""
    termTaxonomId: [ID]
  
    """Whether to prime meta caches for matched terms. Default true."""
    updateTermMetaCache: Boolean
  }
  
  """Connection between the RootQuery type and the Theme type"""
  type RootQueryToThemeConnection {
    """Edges for the RootQueryToThemeConnection connection"""
    edges: [RootQueryToThemeConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [Theme!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type RootQueryToThemeConnectionEdge implements Edge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: Theme!
  }
  
  """Connection between the RootQuery type and the User type"""
  type RootQueryToUserConnection implements UserConnection & Connection {
    """Edges for the RootQueryToUserConnection connection"""
    edges: [RootQueryToUserConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [User!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type RootQueryToUserConnectionEdge implements Edge & UserConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: User!
  }
  
  """Arguments for filtering the RootQueryToUserConnection connection"""
  input RootQueryToUserConnectionWhereArgs {
    """Array of userIds to exclude."""
    exclude: [Int]
  
    """
    Pass an array of post types to filter results to users who have published posts in those post types.
    """
    hasPublishedPosts: [ContentTypeEnum]
  
    """Array of userIds to include."""
    include: [Int]
  
    """The user login."""
    login: String
  
    """
    An array of logins to include. Users matching one of these logins will be included in results.
    """
    loginIn: [String]
  
    """
    An array of logins to exclude. Users matching one of these logins will not be included in results.
    """
    loginNotIn: [String]
  
    """The user nicename."""
    nicename: String
  
    """
    An array of nicenames to include. Users matching one of these nicenames will be included in results.
    """
    nicenameIn: [String]
  
    """
    An array of nicenames to exclude. Users matching one of these nicenames will not be included in results.
    """
    nicenameNotIn: [String]
  
    """What paramater to use to order the objects by."""
    orderby: [UsersConnectionOrderbyInput]
  
    """
    An array of role names that users must match to be included in results. Note
    that this is an inclusive list: users must match *each* role.
    """
    role: UserRoleEnum
  
    """
    An array of role names. Matched users must have at least one of these roles.
    """
    roleIn: [UserRoleEnum]
  
    """
    An array of role names to exclude. Users matching one or more of these roles will not be included in results.
    """
    roleNotIn: [UserRoleEnum]
  
    """
    Search keyword. Searches for possible string matches on columns. When
    "searchColumns" is left empty, it tries to determine which column to search in
    based on search string.
    """
    search: String
  
    """
    Array of column names to be searched. Accepts 'ID', 'login', 'nicename', 'email', 'url'.
    """
    searchColumns: [UsersConnectionSearchColumnEnum]
  }
  
  """Connection between the RootQuery type and the UserRole type"""
  type RootQueryToUserRoleConnection {
    """Edges for the RootQueryToUserRoleConnection connection"""
    edges: [RootQueryToUserRoleConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [UserRole!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type RootQueryToUserRoleConnectionEdge implements Edge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: UserRole!
  }
  
  """Input for the sendPasswordResetEmail mutation"""
  input SendPasswordResetEmailInput {
    """
    This is an ID that can be passed to a mutation by the client to track the
    progress of mutations and catch possible duplicate mutation submissions.
    """
    clientMutationId: String
  
    """A string that contains the user's username or email address."""
    username: String!
  }
  
  """The payload for the sendPasswordResetEmail mutation"""
  type SendPasswordResetEmailPayload {
    """
    If a &#039;clientMutationId&#039; input is provided to the mutation, it will
    be returned as output on the mutation. This ID can be used by the client to
    track the progress of mutations and catch possible duplicate mutation
    """
    clientMutationId: String
  
    """The user that the password reset email was sent to"""
    user: User
  }
  
  """All of the registered settings"""
  type Settings {
    """Settings of the the string Settings Group"""
    discussionSettingsDefaultCommentStatus: String
  
    """Settings of the the string Settings Group"""
    discussionSettingsDefaultPingStatus: String
  
    """Settings of the the string Settings Group"""
    generalSettingsDateFormat: String
  
    """Settings of the the string Settings Group"""
    generalSettingsDescription: String
  
    """Settings of the the string Settings Group"""
    generalSettingsEmail: String
  
    """Settings of the the string Settings Group"""
    generalSettingsLanguage: String
  
    """Settings of the the integer Settings Group"""
    generalSettingsStartOfWeek: Int
  
    """Settings of the the string Settings Group"""
    generalSettingsTimeFormat: String
  
    """Settings of the the string Settings Group"""
    generalSettingsTimezone: String
  
    """Settings of the the string Settings Group"""
    generalSettingsTitle: String
  
    """Settings of the the string Settings Group"""
    generalSettingsUrl: String
  
    """Settings of the the integer Settings Group"""
    readingSettingsPostsPerPage: Int
  
    """Settings of the the integer Settings Group"""
    writingSettingsDefaultCategory: Int
  
    """Settings of the the string Settings Group"""
    writingSettingsDefaultPostFormat: String
  
    """Settings of the the boolean Settings Group"""
    writingSettingsUseSmilies: Boolean
  }
  
  """
  A singular connection from one Node to another, with support for relational data on the &quot;edge&quot; of the connection.
  """
  interface SingleNodeConnectionEdge implements Edge {
    """The connected node"""
    node: Node!
  }
  
  """The tag type"""
  type Tag implements Node & TermNode & UniformResourceIdentifiable & DatabaseIdentifier & MenuItemLinkable {
    """Connection between the tag type and the ContentNode type"""
    contentNodes(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
  
      """Arguments for filtering the connection"""
      where: TagToContentNodeConnectionWhereArgs
    ): TagToContentNodeConnection
  
    """The number of objects connected to the object"""
    count: Int
  
    """The unique identifier stored in the database"""
    databaseId: Int!
  
    """The description of the object"""
    description: String
  
    """Connection between the TermNode type and the EnqueuedScript type"""
    enqueuedScripts(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
    ): TermNodeToEnqueuedScriptConnection
  
    """Connection between the TermNode type and the EnqueuedStylesheet type"""
    enqueuedStylesheets(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
    ): TermNodeToEnqueuedStylesheetConnection
  
    """The unique resource identifier path"""
    id: ID!
  
    """Whether the node is a Content Node"""
    isContentNode: Boolean!
  
    """Whether the object is restricted from the current viewer"""
    isRestricted: Boolean
  
    """Whether the node is a Term"""
    isTermNode: Boolean!
  
    """The link to the term"""
    link: String
  
    """The human friendly name of the object."""
    name: String
  
    """Connection between the tag type and the post type"""
    posts(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
  
      """Arguments for filtering the connection"""
      where: TagToPostConnectionWhereArgs
    ): TagToPostConnection
  
    """An alphanumeric identifier for the object unique to its type."""
    slug: String
  
    """The id field matches the WP_Post-&gt;ID field."""
    tagId: Int @deprecated(reason: "Deprecated in favor of databaseId")
  
    """Connection between the tag type and the Taxonomy type"""
    taxonomy: TagToTaxonomyConnectionEdge
  
    """The name of the taxonomy that the object is associated with"""
    taxonomyName: String
  
    """The ID of the term group that this term object belongs to"""
    termGroupId: Int
  
    """The taxonomy ID that the object is associated with"""
    termTaxonomyId: Int
  
    """The unique resource identifier path"""
    uri: String
  }
  
  """
  The Type of Identifier used to fetch a single resource. Default is ID.
  """
  enum TagIdType {
    """The Database ID for the node"""
    DATABASE_ID
  
    """The hashed Global ID"""
    ID
  
    """The name of the node"""
    NAME
  
    """Url friendly name of the node"""
    SLUG
  
    """The URI for the node"""
    URI
  }
  
  """Connection between the tag type and the ContentNode type"""
  type TagToContentNodeConnection implements ContentNodeConnection & Connection {
    """Edges for the TagToContentNodeConnection connection"""
    edges: [TagToContentNodeConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [ContentNode!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type TagToContentNodeConnectionEdge implements Edge & ContentNodeConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: ContentNode!
  }
  
  """Arguments for filtering the TagToContentNodeConnection connection"""
  input TagToContentNodeConnectionWhereArgs {
    """The Types of content to filter"""
    contentTypes: [ContentTypesOfTagEnum]
  
    """Filter the connection based on dates"""
    dateQuery: DateQueryInput
  
    """
    True for objects with passwords; False for objects without passwords; null for all objects with or without passwords
    """
    hasPassword: Boolean
  
    """Specific ID of the object"""
    id: Int
  
    """Array of IDs for the objects to retrieve"""
    in: [ID]
  
    """Get objects with a specific mimeType property"""
    mimeType: MimeTypeEnum
  
    """Slug / post_name of the object"""
    name: String
  
    """Specify objects to retrieve. Use slugs"""
    nameIn: [String]
  
    """
    Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored
    """
    notIn: [ID]
  
    """What paramater to use to order the objects by."""
    orderby: [PostObjectsConnectionOrderbyInput]
  
    """Use ID to return only children. Use 0 to return only top-level items"""
    parent: ID
  
    """Specify objects whose parent is in an array"""
    parentIn: [ID]
  
    """Specify posts whose parent is not in an array"""
    parentNotIn: [ID]
  
    """Show posts with a specific password."""
    password: String
  
    """Show Posts based on a keyword search"""
    search: String
  
    """Retrieve posts where post status is in an array."""
    stati: [PostStatusEnum]
  
    """Show posts with a specific status."""
    status: PostStatusEnum
  
    """Title of the object"""
    title: String
  }
  
  """Connection between the tag type and the post type"""
  type TagToPostConnection implements ContentNodeConnection & Connection {
    """Edges for the TagToPostConnection connection"""
    edges: [TagToPostConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [Post!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type TagToPostConnectionEdge implements Edge & ContentNodeConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: Post!
  }
  
  """Arguments for filtering the TagToPostConnection connection"""
  input TagToPostConnectionWhereArgs {
    """
    The user that's connected as the author of the object. Use the userId for the author object.
    """
    author: Int
  
    """Find objects connected to author(s) in the array of author's userIds"""
    authorIn: [ID]
  
    """Find objects connected to the author by the author's nicename"""
    authorName: String
  
    """
    Find objects NOT connected to author(s) in the array of author's userIds
    """
    authorNotIn: [ID]
  
    """Category ID"""
    categoryId: Int
  
    """
    Array of category IDs, used to display objects from one category OR another
    """
    categoryIn: [ID]
  
    """Use Category Slug"""
    categoryName: String
  
    """
    Array of category IDs, used to display objects from one category OR another
    """
    categoryNotIn: [ID]
  
    """Filter the connection based on dates"""
    dateQuery: DateQueryInput
  
    """
    True for objects with passwords; False for objects without passwords; null for all objects with or without passwords
    """
    hasPassword: Boolean
  
    """Specific ID of the object"""
    id: Int
  
    """Array of IDs for the objects to retrieve"""
    in: [ID]
  
    """Get objects with a specific mimeType property"""
    mimeType: MimeTypeEnum
  
    """Slug / post_name of the object"""
    name: String
  
    """Specify objects to retrieve. Use slugs"""
    nameIn: [String]
  
    """
    Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored
    """
    notIn: [ID]
  
    """What paramater to use to order the objects by."""
    orderby: [PostObjectsConnectionOrderbyInput]
  
    """Use ID to return only children. Use 0 to return only top-level items"""
    parent: ID
  
    """Specify objects whose parent is in an array"""
    parentIn: [ID]
  
    """Specify posts whose parent is not in an array"""
    parentNotIn: [ID]
  
    """Show posts with a specific password."""
    password: String
  
    """Show Posts based on a keyword search"""
    search: String
  
    """Retrieve posts where post status is in an array."""
    stati: [PostStatusEnum]
  
    """Show posts with a specific status."""
    status: PostStatusEnum
  
    """Tag Slug"""
    tag: String
  
    """Use Tag ID"""
    tagId: String
  
    """Array of tag IDs, used to display objects from one tag OR another"""
    tagIn: [ID]
  
    """Array of tag IDs, used to display objects from one tag OR another"""
    tagNotIn: [ID]
  
    """Array of tag slugs, used to display objects from one tag OR another"""
    tagSlugAnd: [String]
  
    """Array of tag slugs, used to exclude objects in specified tags"""
    tagSlugIn: [String]
  
    """Title of the object"""
    title: String
  }
  
  """Connection between the tag type and the Taxonomy type"""
  type TagToTaxonomyConnectionEdge implements SingleNodeConnectionEdge & Edge & TaxonomyConnectionEdge {
    """The node of the connection, without the edges"""
    node: Taxonomy!
  }
  
  """A taxonomy object"""
  type Taxonomy implements Node {
    """List of Content Types associated with the Taxonomy"""
    connectedContentTypes(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
    ): TaxonomyToContentTypeConnection
  
    """
    Description of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;description
    """
    description: String
  
    """The plural name of the post type within the GraphQL Schema."""
    graphqlPluralName: String
  
    """The singular name of the post type within the GraphQL Schema."""
    graphqlSingleName: String
  
    """Whether the taxonomy is hierarchical"""
    hierarchical: Boolean
  
    """The globally unique identifier of the taxonomy object."""
    id: ID!
  
    """Whether the object is restricted from the current viewer"""
    isRestricted: Boolean
  
    """Name of the taxonomy shown in the menu. Usually plural."""
    label: String
  
    """
    The display name of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;label
    """
    name: String
  
    """Whether the taxonomy is publicly queryable"""
    public: Boolean
  
    """
    Name of content type to diplay in REST API &quot;wp/v2&quot; namespace.
    """
    restBase: String
  
    """The REST Controller class assigned to handling this content type."""
    restControllerClass: String
  
    """
    Whether to show the taxonomy as part of a tag cloud widget. This field is equivalent to WP_Taxonomy-&gt;show_tagcloud
    """
    showCloud: Boolean
  
    """
    Whether to display a column for the taxonomy on its post type listing screens.
    """
    showInAdminColumn: Boolean
  
    """Whether to add the post type to the GraphQL Schema."""
    showInGraphql: Boolean
  
    """Whether to show the taxonomy in the admin menu"""
    showInMenu: Boolean
  
    """Whether the taxonomy is available for selection in navigation menus."""
    showInNavMenus: Boolean
  
    """Whether to show the taxonomy in the quick/bulk edit panel."""
    showInQuickEdit: Boolean
  
    """
    Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace.
    """
    showInRest: Boolean
  
    """
    Whether to generate and allow a UI for managing terms in this taxonomy in the admin
    """
    showUi: Boolean
  }
  
  """Connection to Taxonomy Nodes"""
  interface TaxonomyConnection implements Connection {
    """A list of edges (relational context) between connected nodes"""
    edges: [TaxonomyConnectionEdge!]!
  
    """A list of connected Taxonomy Nodes"""
    nodes: [Taxonomy!]!
  }
  
  """Edge between a Node and a connected Taxonomy Node"""
  interface TaxonomyConnectionEdge implements Edge {
    """The connected node"""
    node: Node!
  }
  
  """Allowed taxonomies"""
  enum TaxonomyEnum {
    """Taxonomy enum category"""
    CATEGORY
  
    """Taxonomy enum post_format"""
    POSTFORMAT
  
    """Taxonomy enum post_tag"""
    TAG
  }
  
  """
  The Type of Identifier used to fetch a single Taxonomy node. To be used along with the "id" field. Default is "ID".
  """
  enum TaxonomyIdTypeEnum {
    """The globally unique ID"""
    ID
  
    """The name of the taxonomy"""
    NAME
  }
  
  """Connection between the Taxonomy type and the ContentType type"""
  type TaxonomyToContentTypeConnection implements ContentTypeConnection & Connection {
    """Edges for the TaxonomyToContentTypeConnection connection"""
    edges: [TaxonomyToContentTypeConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [ContentType!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type TaxonomyToContentTypeConnectionEdge implements Edge & ContentTypeConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: ContentType!
  }
  
  """
  Terms are nodes within a Taxonomy, used to group and relate other nodes.
  """
  interface TermNode implements Node & UniformResourceIdentifiable {
    """The number of objects connected to the object"""
    count: Int
  
    """Identifies the primary key from the database."""
    databaseId: Int!
  
    """The description of the object"""
    description: String
  
    """Connection between the TermNode type and the EnqueuedScript type"""
    enqueuedScripts(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
    ): TermNodeToEnqueuedScriptConnection
  
    """Connection between the TermNode type and the EnqueuedStylesheet type"""
    enqueuedStylesheets(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
    ): TermNodeToEnqueuedStylesheetConnection
  
    """The unique resource identifier path"""
    id: ID!
  
    """Whether the node is a Content Node"""
    isContentNode: Boolean!
  
    """Whether the object is restricted from the current viewer"""
    isRestricted: Boolean
  
    """Whether the node is a Term"""
    isTermNode: Boolean!
  
    """The link to the term"""
    link: String
  
    """The human friendly name of the object."""
    name: String
  
    """An alphanumeric identifier for the object unique to its type."""
    slug: String
  
    """The name of the taxonomy that the object is associated with"""
    taxonomyName: String
  
    """The ID of the term group that this term object belongs to"""
    termGroupId: Int
  
    """The taxonomy ID that the object is associated with"""
    termTaxonomyId: Int
  
    """The unique resource identifier path"""
    uri: String
  }
  
  """Connection to Term Nodes"""
  interface TermNodeConnection implements Connection {
    """A list of edges (relational context) between connected nodes"""
    edges: [TermNodeConnectionEdge!]!
  
    """A list of connected Term Nodes"""
    nodes: [TermNode!]!
  }
  
  """Edge between a Node and a connected Term Node"""
  interface TermNodeConnectionEdge implements Edge {
    """The connected node"""
    node: Node!
  }
  
  """
  The Type of Identifier used to fetch a single resource. Default is "ID". To be used along with the "id" field.
  """
  enum TermNodeIdTypeEnum {
    """The Database ID for the node"""
    DATABASE_ID
  
    """The hashed Global ID"""
    ID
  
    """The name of the node"""
    NAME
  
    """Url friendly name of the node"""
    SLUG
  
    """The URI for the node"""
    URI
  }
  
  """Connection between the TermNode type and the EnqueuedScript type"""
  type TermNodeToEnqueuedScriptConnection {
    """Edges for the TermNodeToEnqueuedScriptConnection connection"""
    edges: [TermNodeToEnqueuedScriptConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [EnqueuedScript!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type TermNodeToEnqueuedScriptConnectionEdge implements Edge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: EnqueuedScript!
  }
  
  """Connection between the TermNode type and the EnqueuedStylesheet type"""
  type TermNodeToEnqueuedStylesheetConnection {
    """Edges for the TermNodeToEnqueuedStylesheetConnection connection"""
    edges: [TermNodeToEnqueuedStylesheetConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [EnqueuedStylesheet!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type TermNodeToEnqueuedStylesheetConnectionEdge implements Edge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: EnqueuedStylesheet!
  }
  
  """Options for ordering the connection by"""
  enum TermObjectsConnectionOrderbyEnum {
    """Order the connection by item count."""
    COUNT
  
    """Order the connection by description."""
    DESCRIPTION
  
    """Order the connection by name."""
    NAME
  
    """Order the connection by slug."""
    SLUG
  
    """Order the connection by term group."""
    TERM_GROUP
  
    """Order the connection by term id."""
    TERM_ID
  
    """Order the connection by term order."""
    TERM_ORDER
  }
  
  """A theme object"""
  type Theme implements Node {
    """
    Name of the theme author(s), could also be a company name. This field is
    equivalent to WP_Theme-&gt;get( &quot;Author&quot; ).
    """
    author: String
  
    """
    URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;AuthorURI&quot; ).
    """
    authorUri: String
  
    """
    The description of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Description&quot; ).
    """
    description: String
  
    """The globally unique identifier of the theme object."""
    id: ID!
  
    """Whether the object is restricted from the current viewer"""
    isRestricted: Boolean
  
    """
    Display name of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Name&quot; ).
    """
    name: String
  
    """
    The URL of the screenshot for the theme. The screenshot is intended to give an
    overview of what the theme looks like. This field is equivalent to
    WP_Theme-&gt;get_screenshot().
    """
    screenshot: String
  
    """
    The theme slug is used to internally match themes. Theme slugs can have
    subdirectories like: my-theme/sub-theme. This field is equivalent to
    WP_Theme-&gt;get_stylesheet().
    """
    slug: String
  
    """
    URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;Tags&quot; ).
    """
    tags: [String]
  
    """
    A URI if the theme has a website associated with it. The Theme URI is handy
    for directing users to a theme site for support etc. This field is equivalent
    to WP_Theme-&gt;get( &quot;ThemeURI&quot; ).
    """
    themeUri: String
  
    """
    The current version of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Version&quot; ).
    """
    version: String
  }
  
  """Any node that has a URI"""
  interface UniformResourceIdentifiable {
    """The unique resource identifier path"""
    id: ID!
  
    """Whether the node is a Content Node"""
    isContentNode: Boolean!
  
    """Whether the node is a Term"""
    isTermNode: Boolean!
  
    """The unique resource identifier path"""
    uri: String
  }
  
  """Input for the UpdateCategory mutation"""
  input UpdateCategoryInput {
    """The slug that the category will be an alias of"""
    aliasOf: String
  
    """
    This is an ID that can be passed to a mutation by the client to track the
    progress of mutations and catch possible duplicate mutation submissions.
    """
    clientMutationId: String
  
    """The description of the category object"""
    description: String
  
    """The ID of the category object to update"""
    id: ID!
  
    """The name of the category object to mutate"""
    name: String
  
    """The ID of the category that should be set as the parent"""
    parentId: ID
  
    """
    If this argument exists then the slug will be checked to see if it is not an
    existing valid term. If that check succeeds (it is not a valid term), then it
    is added and the term id is given. If it fails, then a check is made to
    whether the taxonomy is hierarchical and the parent argument is not empty. If
    the second check succeeds, the term will be inserted and the term id will be
    given. If the slug argument is empty, then it will be calculated from the term
    """
    slug: String
  }
  
  """The payload for the UpdateCategory mutation"""
  type UpdateCategoryPayload {
    """The created category"""
    category: Category
  
    """
    If a &#039;clientMutationId&#039; input is provided to the mutation, it will
    be returned as output on the mutation. This ID can be used by the client to
    track the progress of mutations and catch possible duplicate mutation
    """
    clientMutationId: String
  }
  
  """Input for the updateComment mutation"""
  input UpdateCommentInput {
    """The approval status of the comment."""
    approved: String
  
    """The name of the comment's author."""
    author: String
  
    """The email of the comment's author."""
    authorEmail: String
  
    """The url of the comment's author."""
    authorUrl: String
  
    """
    This is an ID that can be passed to a mutation by the client to track the
    progress of mutations and catch possible duplicate mutation submissions.
    """
    clientMutationId: String
  
    """The ID of the post object the comment belongs to."""
    commentOn: Int
  
    """Content of the comment."""
    content: String
  
    """
    The date of the object. Preferable to enter as year/month/day ( e.g.
    01/31/2017 ) as it will rearrange date as fit if it is not specified.
    Incomplete dates may have unintended results for example, "2017" as the input
    will use current date with timestamp 20:17
    """
    date: String
  
    """The ID of the comment being updated."""
    id: ID!
  
    """Parent comment of current comment."""
    parent: ID
  
    """Type of comment."""
    type: String
  }
  
  """The payload for the updateComment mutation"""
  type UpdateCommentPayload {
    """
    If a &#039;clientMutationId&#039; input is provided to the mutation, it will
    be returned as output on the mutation. This ID can be used by the client to
    track the progress of mutations and catch possible duplicate mutation
    """
    clientMutationId: String
  
    """The comment that was created"""
    comment: Comment
  
    """
    Whether the mutation succeeded. If the comment is not approved, the server
    will not return the comment to a non authenticated user, but a success message
    can be returned if the create succeeded, and the client can optimistically add
    the comment to the client cache
    """
    success: Boolean
  }
  
  """Input for the updateMediaItem mutation"""
  input UpdateMediaItemInput {
    """Alternative text to display when mediaItem is not displayed"""
    altText: String
  
    """The userId to assign as the author of the mediaItem"""
    authorId: ID
  
    """The caption for the mediaItem"""
    caption: String
  
    """
    This is an ID that can be passed to a mutation by the client to track the
    progress of mutations and catch possible duplicate mutation submissions.
    """
    clientMutationId: String
  
    """The comment status for the mediaItem"""
    commentStatus: String
  
    """The date of the mediaItem"""
    date: String
  
    """The date (in GMT zone) of the mediaItem"""
    dateGmt: String
  
    """Description of the mediaItem"""
    description: String
  
    """The file name of the mediaItem"""
    filePath: String
  
    """The file type of the mediaItem"""
    fileType: MimeTypeEnum
  
    """The ID of the mediaItem object"""
    id: ID!
  
    """The WordPress post ID or the graphQL postId of the parent object"""
    parentId: ID
  
    """The ping status for the mediaItem"""
    pingStatus: String
  
    """The slug of the mediaItem"""
    slug: String
  
    """The status of the mediaItem"""
    status: MediaItemStatusEnum
  
    """The title of the mediaItem"""
    title: String
  }
  
  """The payload for the updateMediaItem mutation"""
  type UpdateMediaItemPayload {
    """
    If a &#039;clientMutationId&#039; input is provided to the mutation, it will
    be returned as output on the mutation. This ID can be used by the client to
    track the progress of mutations and catch possible duplicate mutation
    """
    clientMutationId: String
  
    """The MediaItem object mutation type."""
    mediaItem: MediaItem
  }
  
  """Input for the updatePage mutation"""
  input UpdatePageInput {
    """The userId to assign as the author of the object"""
    authorId: ID
  
    """
    This is an ID that can be passed to a mutation by the client to track the
    progress of mutations and catch possible duplicate mutation submissions.
    """
    clientMutationId: String
  
    """The comment status for the object"""
    commentStatus: String
  
    """The content of the object"""
    content: String
  
    """
    The date of the object. Preferable to enter as year/month/day (e.g.
    01/31/2017) as it will rearrange date as fit if it is not specified.
    Incomplete dates may have unintended results for example, "2017" as the input
    will use current date with timestamp 20:17
    """
    date: String
  
    """The ID of the page object"""
    id: ID!
  
    """
    A field used for ordering posts. This is typically used with nav menu items or
    for special ordering of hierarchical content types.
    """
    menuOrder: Int
  
    """The ID of the parent object"""
    parentId: ID
  
    """The password used to protect the content of the object"""
    password: String
  
    """The slug of the object"""
    slug: String
  
    """The status of the object"""
    status: PostStatusEnum
  
    """The title of the object"""
    title: String
  }
  
  """The payload for the updatePage mutation"""
  type UpdatePagePayload {
    """
    If a &#039;clientMutationId&#039; input is provided to the mutation, it will
    be returned as output on the mutation. This ID can be used by the client to
    track the progress of mutations and catch possible duplicate mutation
    """
    clientMutationId: String
  
    """The Post object mutation type."""
    page: Page
  }
  
  """Input for the UpdatePostFormat mutation"""
  input UpdatePostFormatInput {
    """The slug that the post_format will be an alias of"""
    aliasOf: String
  
    """
    This is an ID that can be passed to a mutation by the client to track the
    progress of mutations and catch possible duplicate mutation submissions.
    """
    clientMutationId: String
  
    """The description of the post_format object"""
    description: String
  
    """The ID of the postFormat object to update"""
    id: ID!
  
    """The name of the post_format object to mutate"""
    name: String
  
    """
    If this argument exists then the slug will be checked to see if it is not an
    existing valid term. If that check succeeds (it is not a valid term), then it
    is added and the term id is given. If it fails, then a check is made to
    whether the taxonomy is hierarchical and the parent argument is not empty. If
    the second check succeeds, the term will be inserted and the term id will be
    given. If the slug argument is empty, then it will be calculated from the term
    """
    slug: String
  }
  
  """The payload for the UpdatePostFormat mutation"""
  type UpdatePostFormatPayload {
    """
    If a &#039;clientMutationId&#039; input is provided to the mutation, it will
    be returned as output on the mutation. This ID can be used by the client to
    track the progress of mutations and catch possible duplicate mutation
    """
    clientMutationId: String
  
    """The created post_format"""
    postFormat: PostFormat
  }
  
  """Input for the updatePost mutation"""
  input UpdatePostInput {
    """The userId to assign as the author of the object"""
    authorId: ID
  
    """Set connections between the post and categories"""
    categories: PostCategoriesInput
  
    """
    This is an ID that can be passed to a mutation by the client to track the
    progress of mutations and catch possible duplicate mutation submissions.
    """
    clientMutationId: String
  
    """The comment status for the object"""
    commentStatus: String
  
    """The content of the object"""
    content: String
  
    """
    The date of the object. Preferable to enter as year/month/day (e.g.
    01/31/2017) as it will rearrange date as fit if it is not specified.
    Incomplete dates may have unintended results for example, "2017" as the input
    will use current date with timestamp 20:17
    """
    date: String
  
    """The excerpt of the object"""
    excerpt: String
  
    """The ID of the post object"""
    id: ID!
  
    """
    A field used for ordering posts. This is typically used with nav menu items or
    for special ordering of hierarchical content types.
    """
    menuOrder: Int
  
    """The password used to protect the content of the object"""
    password: String
  
    """The ping status for the object"""
    pingStatus: String
  
    """URLs that have been pinged."""
    pinged: [String]
  
    """Set connections between the post and postFormats"""
    postFormats: PostPostFormatsInput
  
    """The slug of the object"""
    slug: String
  
    """The status of the object"""
    status: PostStatusEnum
  
    """Set connections between the post and tags"""
    tags: PostTagsInput
  
    """The title of the object"""
    title: String
  
    """URLs queued to be pinged."""
    toPing: [String]
  }
  
  """The payload for the updatePost mutation"""
  type UpdatePostPayload {
    """
    If a &#039;clientMutationId&#039; input is provided to the mutation, it will
    be returned as output on the mutation. This ID can be used by the client to
    track the progress of mutations and catch possible duplicate mutation
    """
    clientMutationId: String
  
    """The Post object mutation type."""
    post: Post
  }
  
  """Input for the updateSettings mutation"""
  input UpdateSettingsInput {
    """
    This is an ID that can be passed to a mutation by the client to track the
    progress of mutations and catch possible duplicate mutation submissions.
    """
    clientMutationId: String
  
    """Allow people to submit comments on new posts."""
    discussionSettingsDefaultCommentStatus: String
  
    """
    Allow link notifications from other blogs (pingbacks and trackbacks) on new articles.
    """
    discussionSettingsDefaultPingStatus: String
  
    """A date format for all date strings."""
    generalSettingsDateFormat: String
  
    """Site tagline."""
    generalSettingsDescription: String
  
    """This address is used for admin purposes, like new user notification."""
    generalSettingsEmail: String
  
    """WordPress locale code."""
    generalSettingsLanguage: String
  
    """A day number of the week that the week should start on."""
    generalSettingsStartOfWeek: Int
  
    """A time format for all time strings."""
    generalSettingsTimeFormat: String
  
    """A city in the same timezone as you."""
    generalSettingsTimezone: String
  
    """Site title."""
    generalSettingsTitle: String
  
    """Site URL."""
    generalSettingsUrl: String
  
    """Blog pages show at most."""
    readingSettingsPostsPerPage: Int
  
    """Default post category."""
    writingSettingsDefaultCategory: Int
  
    """Default post format."""
    writingSettingsDefaultPostFormat: String
  
    """Convert emoticons like :-) and :-P to graphics on display."""
    writingSettingsUseSmilies: Boolean
  }
  
  """The payload for the updateSettings mutation"""
  type UpdateSettingsPayload {
    """Update all settings."""
    allSettings: Settings
  
    """
    If a &#039;clientMutationId&#039; input is provided to the mutation, it will
    be returned as output on the mutation. This ID can be used by the client to
    track the progress of mutations and catch possible duplicate mutation
    """
    clientMutationId: String
  
    """Update the discussion setting."""
    discussionSettings: DiscussionSettings
  
    """Update the general setting."""
    generalSettings: GeneralSettings
  
    """Update the reading setting."""
    readingSettings: ReadingSettings
  
    """Update the writing setting."""
    writingSettings: WritingSettings
  }
  
  """Input for the UpdateTag mutation"""
  input UpdateTagInput {
    """The slug that the post_tag will be an alias of"""
    aliasOf: String
  
    """
    This is an ID that can be passed to a mutation by the client to track the
    progress of mutations and catch possible duplicate mutation submissions.
    """
    clientMutationId: String
  
    """The description of the post_tag object"""
    description: String
  
    """The ID of the tag object to update"""
    id: ID!
  
    """The name of the post_tag object to mutate"""
    name: String
  
    """
    If this argument exists then the slug will be checked to see if it is not an
    existing valid term. If that check succeeds (it is not a valid term), then it
    is added and the term id is given. If it fails, then a check is made to
    whether the taxonomy is hierarchical and the parent argument is not empty. If
    the second check succeeds, the term will be inserted and the term id will be
    given. If the slug argument is empty, then it will be calculated from the term
    """
    slug: String
  }
  
  """The payload for the UpdateTag mutation"""
  type UpdateTagPayload {
    """
    If a &#039;clientMutationId&#039; input is provided to the mutation, it will
    be returned as output on the mutation. This ID can be used by the client to
    track the progress of mutations and catch possible duplicate mutation
    """
    clientMutationId: String
  
    """The created post_tag"""
    tag: Tag
  }
  
  """Input for the updateUser mutation"""
  input UpdateUserInput {
    """User's AOL IM account."""
    aim: String
  
    """
    This is an ID that can be passed to a mutation by the client to track the
    progress of mutations and catch possible duplicate mutation submissions.
    """
    clientMutationId: String
  
    """A string containing content about the user."""
    description: String
  
    """
    A string that will be shown on the site. Defaults to user's username. It is
    likely that you will want to change this, for both appearance and security
    through obscurity (that is if you dont use and delete the default admin user).
    """
    displayName: String
  
    """A string containing the user's email address."""
    email: String
  
    """	The user's first name."""
    firstName: String
  
    """The ID of the user"""
    id: ID!
  
    """User's Jabber account."""
    jabber: String
  
    """The user's last name."""
    lastName: String
  
    """User's locale."""
    locale: String
  
    """
    A string that contains a URL-friendly name for the user. The default is the user's username.
    """
    nicename: String
  
    """The user's nickname, defaults to the user's username."""
    nickname: String
  
    """A string that contains the plain text password for the user."""
    password: String
  
    """The date the user registered. Format is Y-m-d H:i:s."""
    registered: String
  
    """
    A string for whether to enable the rich editor or not. False if not empty.
    """
    richEditing: String
  
    """An array of roles to be assigned to the user."""
    roles: [String]
  
    """A string containing the user's URL for the user's web site."""
    websiteUrl: String
  
    """User's Yahoo IM account."""
    yim: String
  }
  
  """The payload for the updateUser mutation"""
  type UpdateUserPayload {
    """
    If a &#039;clientMutationId&#039; input is provided to the mutation, it will
    be returned as output on the mutation. This ID can be used by the client to
    track the progress of mutations and catch possible duplicate mutation
    """
    clientMutationId: String
  
    """The User object mutation type."""
    user: User
  }
  
  """A User object"""
  type User implements Node & UniformResourceIdentifiable & Commenter & DatabaseIdentifier {
    """
    Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument.
    """
    avatar(
      """
      The size attribute of the avatar field can be used to fetch avatars of
      different sizes. The value corresponds to the dimension in pixels to fetch.
      The default is 96 pixels.
      """
      size: Int = 96
  
      """
      Whether to always show the default image, never the Gravatar. Default false
      """
      forceDefault: Boolean
  
      """The rating level of the avatar."""
      rating: AvatarRatingEnum
    ): Avatar
  
    """
    User metadata option name. Usually it will be &quot;wp_capabilities&quot;.
    """
    capKey: String
  
    """A list of capabilities (permissions) granted to the user"""
    capabilities: [String]
  
    """Connection between the User type and the Comment type"""
    comments(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
  
      """Arguments for filtering the connection"""
      where: UserToCommentConnectionWhereArgs
    ): UserToCommentConnection
  
    """Identifies the primary key from the database."""
    databaseId: Int!
  
    """Description of the user."""
    description: String
  
    """
    Email address of the user. This is equivalent to the WP_User-&gt;user_email property.
    """
    email: String
  
    """Connection between the User type and the EnqueuedScript type"""
    enqueuedScripts(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
    ): UserToEnqueuedScriptConnection
  
    """Connection between the User type and the EnqueuedStylesheet type"""
    enqueuedStylesheets(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
    ): UserToEnqueuedStylesheetConnection
  
    """
    A complete list of capabilities including capabilities inherited from a role.
    This is equivalent to the array keys of WP_User-&gt;allcaps.
    """
    extraCapabilities: [String]
  
    """
    First name of the user. This is equivalent to the WP_User-&gt;user_first_name property.
    """
    firstName: String
  
    """The globally unique identifier for the user object."""
    id: ID!
  
    """Whether the node is a Content Node"""
    isContentNode: Boolean!
  
    """Whether the object is restricted from the current viewer"""
    isRestricted: Boolean
  
    """Whether the node is a Term"""
    isTermNode: Boolean!
  
    """
    Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property.
    """
    lastName: String
  
    """
    The preferred language locale set for the user. Value derived from get_user_locale().
    """
    locale: String
  
    """Connection between the User type and the mediaItem type"""
    mediaItems(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
  
      """Arguments for filtering the connection"""
      where: UserToMediaItemConnectionWhereArgs
    ): UserToMediaItemConnection
  
    """
    Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property.
    """
    name: String
  
    """
    The nicename for the user. This field is equivalent to WP_User-&gt;user_nicename
    """
    nicename: String
  
    """Nickname of the user."""
    nickname: String
  
    """Connection between the User type and the page type"""
    pages(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
  
      """Arguments for filtering the connection"""
      where: UserToPageConnectionWhereArgs
    ): UserToPageConnection
  
    """Connection between the User type and the post type"""
    posts(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
  
      """Arguments for filtering the connection"""
      where: UserToPostConnectionWhereArgs
    ): UserToPostConnection
  
    """
    The date the user registered or was created. The field follows a full ISO8601 date string format.
    """
    registeredDate: String
  
    """Connection between the User and Revisions authored by the user"""
    revisions(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
  
      """Arguments for filtering the connection"""
      where: UserToContentNodeConnectionWhereArgs
    ): UserToContentNodeConnection
  
    """Connection between the User type and the UserRole type"""
    roles(
      """The number of items to return after the referenced "after" cursor"""
      first: Int
  
      """The number of items to return before the referenced "before" cursor"""
      last: Int
  
      """
      Cursor used along with the "first" argument to reference where in the dataset to get data
      """
      after: String
  
      """
      Cursor used along with the "last" argument to reference where in the dataset to get data
      """
      before: String
    ): UserToUserRoleConnection
  
    """
    The slug for the user. This field is equivalent to WP_User-&gt;user_nicename
    """
    slug: String
  
    """The unique resource identifier path"""
    uri: String
  
    """A website url that is associated with the user."""
    url: String
  
    """The Id of the user. Equivalent to WP_User-&gt;ID"""
    userId: Int @deprecated(reason: "Deprecated in favor of the databaseId field")
  
    """
    Username for the user. This field is equivalent to WP_User-&gt;user_login.
    """
    username: String
  }
  
  """Connection to User Nodes"""
  interface UserConnection implements Connection {
    """A list of edges (relational context) between connected nodes"""
    edges: [UserConnectionEdge!]!
  
    """A list of connected User Nodes"""
    nodes: [User!]!
  }
  
  """Edge between a Node and a connected User"""
  interface UserConnectionEdge implements Edge {
    """The connected node"""
    node: Node!
  }
  
  """
  The Type of Identifier used to fetch a single User node. To be used along with the "id" field. Default is "ID".
  """
  enum UserNodeIdTypeEnum {
    """The Database ID for the node"""
    DATABASE_ID
  
    """The Email of the User"""
    EMAIL
  
    """The hashed Global ID"""
    ID
  
    """The slug of the User"""
    SLUG
  
    """The URI for the node"""
    URI
  
    """The username the User uses to login with"""
    USERNAME
  }
  
  """A user role object"""
  type UserRole implements Node {
    """The capabilities that belong to this role"""
    capabilities: [String]
  
    """The display name of the role"""
    displayName: String
  
    """The globally unique identifier for the user role object."""
    id: ID!
  
    """Whether the object is restricted from the current viewer"""
    isRestricted: Boolean
  
    """The registered name of the role"""
    name: String
  }
  
  """Names of available user roles"""
  enum UserRoleEnum {
    """User role with specific capabilities"""
    ADMINISTRATOR
  
    """User role with specific capabilities"""
    AUTHOR
  
    """User role with specific capabilities"""
    CONTRIBUTOR
  
    """User role with specific capabilities"""
    EDITOR
  
    """User role with specific capabilities"""
    SUBSCRIBER
  }
  
  """Connection between the User type and the Comment type"""
  type UserToCommentConnection implements CommentConnection & Connection {
    """Edges for the UserToCommentConnection connection"""
    edges: [UserToCommentConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [Comment!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type UserToCommentConnectionEdge implements Edge & CommentConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: Comment!
  }
  
  """Arguments for filtering the UserToCommentConnection connection"""
  input UserToCommentConnectionWhereArgs {
    """Comment author email address."""
    authorEmail: String
  
    """Array of author IDs to include comments for."""
    authorIn: [ID]
  
    """Array of author IDs to exclude comments for."""
    authorNotIn: [ID]
  
    """Comment author URL."""
    authorUrl: String
  
    """Array of comment IDs to include."""
    commentIn: [ID]
  
    """
    Array of IDs of users whose unapproved comments will be returned by the query regardless of status.
    """
    commentNotIn: [ID]
  
    """Include comments of a given type."""
    commentType: String
  
    """Include comments from a given array of comment types."""
    commentTypeIn: [String]
  
    """Exclude comments from a given array of comment types."""
    commentTypeNotIn: String
  
    """Content object author ID to limit results by."""
    contentAuthor: [ID]
  
    """Array of author IDs to retrieve comments for."""
    contentAuthorIn: [ID]
  
    """Array of author IDs *not* to retrieve comments for."""
    contentAuthorNotIn: [ID]
  
    """Limit results to those affiliated with a given content object ID."""
    contentId: ID
  
    """Array of content object IDs to include affiliated comments for."""
    contentIdIn: [ID]
  
    """Array of content object IDs to exclude affiliated comments for."""
    contentIdNotIn: [ID]
  
    """Content object name to retrieve affiliated comments for."""
    contentName: String
  
    """Content Object parent ID to retrieve affiliated comments for."""
    contentParent: Int
  
    """
    Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value.
    """
    contentStatus: [PostStatusEnum]
  
    """
    Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value.
    """
    contentType: [ContentTypeEnum]
  
    """
    Array of IDs or email addresses of users whose unapproved comments will be
    returned by the query regardless of $status. Default empty
    """
    includeUnapproved: [ID]
  
    """Karma score to retrieve matching comments for."""
    karma: Int
  
    """The cardinality of the order of the connection"""
    order: OrderEnum
  
    """Field to order the comments by."""
    orderby: CommentsConnectionOrderbyEnum
  
    """Parent ID of comment to retrieve children of."""
    parent: Int
  
    """Array of parent IDs of comments to retrieve children for."""
    parentIn: [ID]
  
    """Array of parent IDs of comments *not* to retrieve children for."""
    parentNotIn: [ID]
  
    """Search term(s) to retrieve matching comments for."""
    search: String
  
    """Comment status to limit results by."""
    status: String
  
    """Include comments for a specific user ID."""
    userId: ID
  }
  
  """Connection between the User type and the ContentNode type"""
  type UserToContentNodeConnection implements ContentNodeConnection & Connection {
    """Edges for the UserToContentNodeConnection connection"""
    edges: [UserToContentNodeConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [ContentNode!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type UserToContentNodeConnectionEdge implements Edge & ContentNodeConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: ContentNode!
  }
  
  """Arguments for filtering the UserToContentNodeConnection connection"""
  input UserToContentNodeConnectionWhereArgs {
    """The Types of content to filter"""
    contentTypes: [ContentTypeEnum]
  
    """Filter the connection based on dates"""
    dateQuery: DateQueryInput
  
    """
    True for objects with passwords; False for objects without passwords; null for all objects with or without passwords
    """
    hasPassword: Boolean
  
    """Specific ID of the object"""
    id: Int
  
    """Array of IDs for the objects to retrieve"""
    in: [ID]
  
    """Get objects with a specific mimeType property"""
    mimeType: MimeTypeEnum
  
    """Slug / post_name of the object"""
    name: String
  
    """Specify objects to retrieve. Use slugs"""
    nameIn: [String]
  
    """
    Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored
    """
    notIn: [ID]
  
    """What paramater to use to order the objects by."""
    orderby: [PostObjectsConnectionOrderbyInput]
  
    """Use ID to return only children. Use 0 to return only top-level items"""
    parent: ID
  
    """Specify objects whose parent is in an array"""
    parentIn: [ID]
  
    """Specify posts whose parent is not in an array"""
    parentNotIn: [ID]
  
    """Show posts with a specific password."""
    password: String
  
    """Show Posts based on a keyword search"""
    search: String
  
    """Retrieve posts where post status is in an array."""
    stati: [PostStatusEnum]
  
    """Show posts with a specific status."""
    status: PostStatusEnum
  
    """Title of the object"""
    title: String
  }
  
  """Connection between the User type and the EnqueuedScript type"""
  type UserToEnqueuedScriptConnection {
    """Edges for the UserToEnqueuedScriptConnection connection"""
    edges: [UserToEnqueuedScriptConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [EnqueuedScript!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type UserToEnqueuedScriptConnectionEdge implements Edge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: EnqueuedScript!
  }
  
  """Connection between the User type and the EnqueuedStylesheet type"""
  type UserToEnqueuedStylesheetConnection {
    """Edges for the UserToEnqueuedStylesheetConnection connection"""
    edges: [UserToEnqueuedStylesheetConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [EnqueuedStylesheet!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type UserToEnqueuedStylesheetConnectionEdge implements Edge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: EnqueuedStylesheet!
  }
  
  """Connection between the User type and the mediaItem type"""
  type UserToMediaItemConnection implements ContentNodeConnection & Connection {
    """Edges for the UserToMediaItemConnection connection"""
    edges: [UserToMediaItemConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [MediaItem!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type UserToMediaItemConnectionEdge implements Edge & ContentNodeConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: MediaItem!
  }
  
  """Arguments for filtering the UserToMediaItemConnection connection"""
  input UserToMediaItemConnectionWhereArgs {
    """
    The user that's connected as the author of the object. Use the userId for the author object.
    """
    author: Int
  
    """Find objects connected to author(s) in the array of author's userIds"""
    authorIn: [ID]
  
    """Find objects connected to the author by the author's nicename"""
    authorName: String
  
    """
    Find objects NOT connected to author(s) in the array of author's userIds
    """
    authorNotIn: [ID]
  
    """Filter the connection based on dates"""
    dateQuery: DateQueryInput
  
    """
    True for objects with passwords; False for objects without passwords; null for all objects with or without passwords
    """
    hasPassword: Boolean
  
    """Specific ID of the object"""
    id: Int
  
    """Array of IDs for the objects to retrieve"""
    in: [ID]
  
    """Get objects with a specific mimeType property"""
    mimeType: MimeTypeEnum
  
    """Slug / post_name of the object"""
    name: String
  
    """Specify objects to retrieve. Use slugs"""
    nameIn: [String]
  
    """
    Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored
    """
    notIn: [ID]
  
    """What paramater to use to order the objects by."""
    orderby: [PostObjectsConnectionOrderbyInput]
  
    """Use ID to return only children. Use 0 to return only top-level items"""
    parent: ID
  
    """Specify objects whose parent is in an array"""
    parentIn: [ID]
  
    """Specify posts whose parent is not in an array"""
    parentNotIn: [ID]
  
    """Show posts with a specific password."""
    password: String
  
    """Show Posts based on a keyword search"""
    search: String
  
    """Retrieve posts where post status is in an array."""
    stati: [PostStatusEnum]
  
    """Show posts with a specific status."""
    status: PostStatusEnum
  
    """Title of the object"""
    title: String
  }
  
  """Connection between the User type and the page type"""
  type UserToPageConnection implements ContentNodeConnection & Connection {
    """Edges for the UserToPageConnection connection"""
    edges: [UserToPageConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [Page!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type UserToPageConnectionEdge implements Edge & ContentNodeConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: Page!
  }
  
  """Arguments for filtering the UserToPageConnection connection"""
  input UserToPageConnectionWhereArgs {
    """
    The user that's connected as the author of the object. Use the userId for the author object.
    """
    author: Int
  
    """Find objects connected to author(s) in the array of author's userIds"""
    authorIn: [ID]
  
    """Find objects connected to the author by the author's nicename"""
    authorName: String
  
    """
    Find objects NOT connected to author(s) in the array of author's userIds
    """
    authorNotIn: [ID]
  
    """Filter the connection based on dates"""
    dateQuery: DateQueryInput
  
    """
    True for objects with passwords; False for objects without passwords; null for all objects with or without passwords
    """
    hasPassword: Boolean
  
    """Specific ID of the object"""
    id: Int
  
    """Array of IDs for the objects to retrieve"""
    in: [ID]
  
    """Get objects with a specific mimeType property"""
    mimeType: MimeTypeEnum
  
    """Slug / post_name of the object"""
    name: String
  
    """Specify objects to retrieve. Use slugs"""
    nameIn: [String]
  
    """
    Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored
    """
    notIn: [ID]
  
    """What paramater to use to order the objects by."""
    orderby: [PostObjectsConnectionOrderbyInput]
  
    """Use ID to return only children. Use 0 to return only top-level items"""
    parent: ID
  
    """Specify objects whose parent is in an array"""
    parentIn: [ID]
  
    """Specify posts whose parent is not in an array"""
    parentNotIn: [ID]
  
    """Show posts with a specific password."""
    password: String
  
    """Show Posts based on a keyword search"""
    search: String
  
    """Retrieve posts where post status is in an array."""
    stati: [PostStatusEnum]
  
    """Show posts with a specific status."""
    status: PostStatusEnum
  
    """Title of the object"""
    title: String
  }
  
  """Connection between the User type and the post type"""
  type UserToPostConnection implements ContentNodeConnection & Connection {
    """Edges for the UserToPostConnection connection"""
    edges: [UserToPostConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [Post!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type UserToPostConnectionEdge implements Edge & ContentNodeConnectionEdge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: Post!
  }
  
  """Arguments for filtering the UserToPostConnection connection"""
  input UserToPostConnectionWhereArgs {
    """
    The user that's connected as the author of the object. Use the userId for the author object.
    """
    author: Int
  
    """Find objects connected to author(s) in the array of author's userIds"""
    authorIn: [ID]
  
    """Find objects connected to the author by the author's nicename"""
    authorName: String
  
    """
    Find objects NOT connected to author(s) in the array of author's userIds
    """
    authorNotIn: [ID]
  
    """Category ID"""
    categoryId: Int
  
    """
    Array of category IDs, used to display objects from one category OR another
    """
    categoryIn: [ID]
  
    """Use Category Slug"""
    categoryName: String
  
    """
    Array of category IDs, used to display objects from one category OR another
    """
    categoryNotIn: [ID]
  
    """Filter the connection based on dates"""
    dateQuery: DateQueryInput
  
    """
    True for objects with passwords; False for objects without passwords; null for all objects with or without passwords
    """
    hasPassword: Boolean
  
    """Specific ID of the object"""
    id: Int
  
    """Array of IDs for the objects to retrieve"""
    in: [ID]
  
    """Get objects with a specific mimeType property"""
    mimeType: MimeTypeEnum
  
    """Slug / post_name of the object"""
    name: String
  
    """Specify objects to retrieve. Use slugs"""
    nameIn: [String]
  
    """
    Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored
    """
    notIn: [ID]
  
    """What paramater to use to order the objects by."""
    orderby: [PostObjectsConnectionOrderbyInput]
  
    """Use ID to return only children. Use 0 to return only top-level items"""
    parent: ID
  
    """Specify objects whose parent is in an array"""
    parentIn: [ID]
  
    """Specify posts whose parent is not in an array"""
    parentNotIn: [ID]
  
    """Show posts with a specific password."""
    password: String
  
    """Show Posts based on a keyword search"""
    search: String
  
    """Retrieve posts where post status is in an array."""
    stati: [PostStatusEnum]
  
    """Show posts with a specific status."""
    status: PostStatusEnum
  
    """Tag Slug"""
    tag: String
  
    """Use Tag ID"""
    tagId: String
  
    """Array of tag IDs, used to display objects from one tag OR another"""
    tagIn: [ID]
  
    """Array of tag IDs, used to display objects from one tag OR another"""
    tagNotIn: [ID]
  
    """Array of tag slugs, used to display objects from one tag OR another"""
    tagSlugAnd: [String]
  
    """Array of tag slugs, used to exclude objects in specified tags"""
    tagSlugIn: [String]
  
    """Title of the object"""
    title: String
  }
  
  """Connection between the User type and the UserRole type"""
  type UserToUserRoleConnection {
    """Edges for the UserToUserRoleConnection connection"""
    edges: [UserToUserRoleConnectionEdge!]!
  
    """The nodes of the connection, without the edges"""
    nodes: [UserRole!]!
  
    """Information about pagination in a connection."""
    pageInfo: WPPageInfo
  }
  
  """An edge in a connection"""
  type UserToUserRoleConnectionEdge implements Edge {
    """A cursor for use in pagination"""
    cursor: String
  
    """The item at the end of the edge"""
    node: UserRole!
  }
  
  """Field to order the connection by"""
  enum UsersConnectionOrderbyEnum {
    """Order by display name"""
    DISPLAY_NAME
  
    """Order by email address"""
    EMAIL
  
    """Order by login"""
    LOGIN
  
    """Preserve the login order given in the LOGIN_IN array"""
    LOGIN_IN
  
    """Order by nice name"""
    NICE_NAME
  
    """Preserve the nice name order given in the NICE_NAME_IN array"""
    NICE_NAME_IN
  
    """Order by registration date"""
    REGISTERED
  
    """Order by URL"""
    URL
  }
  
  """Options for ordering the connection"""
  input UsersConnectionOrderbyInput {
    """The field name used to sort the results."""
    field: UsersConnectionOrderbyEnum!
  
    """The cardinality of the order of the connection"""
    order: OrderEnum
  }
  
  """Column used for searching for users."""
  enum UsersConnectionSearchColumnEnum {
    """The user's email address."""
    EMAIL
  
    """The globally unique ID."""
    ID
  
    """The username the User uses to login with."""
    LOGIN
  
    """A URL-friendly name for the user. The default is the user's username."""
    NICENAME
  
    """The URL of the user\s website."""
    URL
  }
  
  """Information about pagination in a connection."""
  type WPPageInfo {
    """When paginating forwards, the cursor to continue."""
    endCursor: String
  
    """When paginating forwards, are there more items?"""
    hasNextPage: Boolean!
  
    """When paginating backwards, are there more items?"""
    hasPreviousPage: Boolean!
  
    """When paginating backwards, the cursor to continue."""
    startCursor: String
  }
  
  """The writing setting type"""
  type WritingSettings {
    """Default post category."""
    defaultCategory: Int
  
    """Default post format."""
    defaultPostFormat: String
  
    """Convert emoticons like :-) and :-P to graphics on display."""
    useSmilies: Boolean
  }
  `;

  export default currentSchema;
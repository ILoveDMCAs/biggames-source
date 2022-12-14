export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
    Date: any;
    /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
    DateTime: any;
    /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSON: any;
    /** The `Upload` scalar type represents a file upload. */
    Upload: any;
};

export type Article = {
    __typename?: 'Article';
    Footer?: Maybe<Array<Maybe<ComponentFooterComponentFooter>>>;
    Header?: Maybe<ComponentHeadercompHeader>;
    TextEl?: Maybe<Array<Maybe<ComponentTextElementComponentTextElement>>>;
    TitleDesc?: Maybe<Array<Maybe<ComponentTitleDescCompTitleDesc>>>;
    createdAt?: Maybe<Scalars['DateTime']>;
    publishedAt?: Maybe<Scalars['DateTime']>;
    slug?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ArticleFooterArgs = {
    filters?: InputMaybe<ComponentFooterComponentFooterFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ArticleTextElArgs = {
    filters?: InputMaybe<ComponentTextElementComponentTextElementFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ArticleTitleDescArgs = {
    filters?: InputMaybe<ComponentTitleDescCompTitleDescFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ArticleEntity = {
    __typename?: 'ArticleEntity';
    attributes?: Maybe<Article>;
    id?: Maybe<Scalars['ID']>;
};

export type ArticleEntityResponse = {
    __typename?: 'ArticleEntityResponse';
    data?: Maybe<ArticleEntity>;
};

export type ArticleEntityResponseCollection = {
    __typename?: 'ArticleEntityResponseCollection';
    data: Array<ArticleEntity>;
    meta: ResponseCollectionMeta;
};

export type ArticleFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
    createdAt?: InputMaybe<DateTimeFilterInput>;
    id?: InputMaybe<IdFilterInput>;
    not?: InputMaybe<ArticleFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
    publishedAt?: InputMaybe<DateTimeFilterInput>;
    slug?: InputMaybe<StringFilterInput>;
    updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ArticleInput = {
    Footer?: InputMaybe<Array<InputMaybe<ComponentFooterComponentFooterInput>>>;
    Header?: InputMaybe<ComponentHeadercompHeaderInput>;
    TextEl?: InputMaybe<Array<InputMaybe<ComponentTextElementComponentTextElementInput>>>;
    TitleDesc?: InputMaybe<Array<InputMaybe<ComponentTitleDescCompTitleDescInput>>>;
    publishedAt?: InputMaybe<Scalars['DateTime']>;
    slug?: InputMaybe<Scalars['String']>;
};

export type BooleanFilterInput = {
    and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
    between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
    contains?: InputMaybe<Scalars['Boolean']>;
    containsi?: InputMaybe<Scalars['Boolean']>;
    endsWith?: InputMaybe<Scalars['Boolean']>;
    eq?: InputMaybe<Scalars['Boolean']>;
    gt?: InputMaybe<Scalars['Boolean']>;
    gte?: InputMaybe<Scalars['Boolean']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
    lt?: InputMaybe<Scalars['Boolean']>;
    lte?: InputMaybe<Scalars['Boolean']>;
    ne?: InputMaybe<Scalars['Boolean']>;
    not?: InputMaybe<BooleanFilterInput>;
    notContains?: InputMaybe<Scalars['Boolean']>;
    notContainsi?: InputMaybe<Scalars['Boolean']>;
    notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
    notNull?: InputMaybe<Scalars['Boolean']>;
    null?: InputMaybe<Scalars['Boolean']>;
    or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
    startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type ComponentContentRichTextComponentContentRichText = {
    __typename?: 'ComponentContentRichTextComponentContentRichText';
    content?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
};

export type ComponentElTxtElTxt = {
    __typename?: 'ComponentElTxtElTxt';
    id: Scalars['ID'];
    text?: Maybe<Scalars['String']>;
    textLong?: Maybe<Scalars['String']>;
};

export type ComponentFooterComponentFooter = {
    __typename?: 'ComponentFooterComponentFooter';
    id: Scalars['ID'];
    link?: Maybe<Scalars['String']>;
    linkDesc?: Maybe<Scalars['String']>;
    tag?: Maybe<Scalars['String']>;
};

export type ComponentFooterComponentFooterFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<ComponentFooterComponentFooterFiltersInput>>>;
    link?: InputMaybe<StringFilterInput>;
    linkDesc?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<ComponentFooterComponentFooterFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<ComponentFooterComponentFooterFiltersInput>>>;
    tag?: InputMaybe<StringFilterInput>;
};

export type ComponentFooterComponentFooterInput = {
    id?: InputMaybe<Scalars['ID']>;
    link?: InputMaybe<Scalars['String']>;
    linkDesc?: InputMaybe<Scalars['String']>;
    tag?: InputMaybe<Scalars['String']>;
};

export type ComponentHeadercompHeader = {
    __typename?: 'ComponentHeadercompHeader';
    date?: Maybe<Scalars['Date']>;
    descriptionshort?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    title?: Maybe<Scalars['String']>;
};

export type ComponentHeadercompHeaderInput = {
    date?: InputMaybe<Scalars['Date']>;
    descriptionshort?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    title?: InputMaybe<Scalars['String']>;
};

export type ComponentImgSliderImgSlider = {
    __typename?: 'ComponentImgSliderImgSlider';
    id: Scalars['ID'];
    image?: Maybe<Scalars['String']>;
    link?: Maybe<Scalars['String']>;
    name: Scalars['String'];
    type?: Maybe<Scalars['String']>;
};

export type ComponentImgSliderImgSliderFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<ComponentImgSliderImgSliderFiltersInput>>>;
    image?: InputMaybe<StringFilterInput>;
    link?: InputMaybe<StringFilterInput>;
    name?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<ComponentImgSliderImgSliderFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<ComponentImgSliderImgSliderFiltersInput>>>;
    type?: InputMaybe<StringFilterInput>;
};

export type ComponentImgSliderImgSliderInput = {
    id?: InputMaybe<Scalars['ID']>;
    image?: InputMaybe<Scalars['String']>;
    link?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    type?: InputMaybe<Scalars['String']>;
};

export type ComponentSlugPathSlug = {
    __typename?: 'ComponentSlugPathSlug';
    id: Scalars['ID'];
    slug?: Maybe<Scalars['String']>;
};

export type ComponentTextElementComponentTextElement = {
    __typename?: 'ComponentTextElementComponentTextElement';
    id: Scalars['ID'];
    textLong?: Maybe<Scalars['String']>;
    textShort?: Maybe<Scalars['String']>;
};

export type ComponentTextElementComponentTextElementFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<ComponentTextElementComponentTextElementFiltersInput>>>;
    not?: InputMaybe<ComponentTextElementComponentTextElementFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<ComponentTextElementComponentTextElementFiltersInput>>>;
    textLong?: InputMaybe<StringFilterInput>;
    textShort?: InputMaybe<StringFilterInput>;
};

export type ComponentTextElementComponentTextElementInput = {
    id?: InputMaybe<Scalars['ID']>;
    textLong?: InputMaybe<Scalars['String']>;
    textShort?: InputMaybe<Scalars['String']>;
};

export type ComponentTitleDescCompTitleDesc = {
    __typename?: 'ComponentTitleDescCompTitleDesc';
    content?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    imgString?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
};

export type ComponentTitleDescCompTitleDescFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<ComponentTitleDescCompTitleDescFiltersInput>>>;
    content?: InputMaybe<StringFilterInput>;
    imgString?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<ComponentTitleDescCompTitleDescFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<ComponentTitleDescCompTitleDescFiltersInput>>>;
    title?: InputMaybe<StringFilterInput>;
};

export type ComponentTitleDescCompTitleDescInput = {
    content?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    imgString?: InputMaybe<Scalars['String']>;
    title?: InputMaybe<Scalars['String']>;
};

export type Countdown = {
    __typename?: 'Countdown';
    counterEndText: Scalars['String'];
    counterTime?: Maybe<Scalars['DateTime']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    dev_blog?: Maybe<DevBlogEntityResponse>;
    hero_title_desc?: Maybe<HeroTitleDescEntityResponse>;
    img_slider_comp?: Maybe<ImgSliderCompEntityResponse>;
    publishedAt?: Maybe<Scalars['DateTime']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CountdownEntity = {
    __typename?: 'CountdownEntity';
    attributes?: Maybe<Countdown>;
    id?: Maybe<Scalars['ID']>;
};

export type CountdownEntityResponse = {
    __typename?: 'CountdownEntityResponse';
    data?: Maybe<CountdownEntity>;
};

export type CountdownEntityResponseCollection = {
    __typename?: 'CountdownEntityResponseCollection';
    data: Array<CountdownEntity>;
    meta: ResponseCollectionMeta;
};

export type CountdownFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<CountdownFiltersInput>>>;
    counterEndText?: InputMaybe<StringFilterInput>;
    counterTime?: InputMaybe<DateTimeFilterInput>;
    createdAt?: InputMaybe<DateTimeFilterInput>;
    dev_blog?: InputMaybe<DevBlogFiltersInput>;
    hero_title_desc?: InputMaybe<HeroTitleDescFiltersInput>;
    id?: InputMaybe<IdFilterInput>;
    img_slider_comp?: InputMaybe<ImgSliderCompFiltersInput>;
    not?: InputMaybe<CountdownFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<CountdownFiltersInput>>>;
    publishedAt?: InputMaybe<DateTimeFilterInput>;
    updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CountdownInput = {
    counterEndText?: InputMaybe<Scalars['String']>;
    counterTime?: InputMaybe<Scalars['DateTime']>;
    dev_blog?: InputMaybe<Scalars['ID']>;
    hero_title_desc?: InputMaybe<Scalars['ID']>;
    img_slider_comp?: InputMaybe<Scalars['ID']>;
    publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DateFilterInput = {
    and?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
    between?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
    contains?: InputMaybe<Scalars['Date']>;
    containsi?: InputMaybe<Scalars['Date']>;
    endsWith?: InputMaybe<Scalars['Date']>;
    eq?: InputMaybe<Scalars['Date']>;
    gt?: InputMaybe<Scalars['Date']>;
    gte?: InputMaybe<Scalars['Date']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
    lt?: InputMaybe<Scalars['Date']>;
    lte?: InputMaybe<Scalars['Date']>;
    ne?: InputMaybe<Scalars['Date']>;
    not?: InputMaybe<DateFilterInput>;
    notContains?: InputMaybe<Scalars['Date']>;
    notContainsi?: InputMaybe<Scalars['Date']>;
    notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
    notNull?: InputMaybe<Scalars['Boolean']>;
    null?: InputMaybe<Scalars['Boolean']>;
    or?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
    startsWith?: InputMaybe<Scalars['Date']>;
};

export type DateTimeFilterInput = {
    and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    contains?: InputMaybe<Scalars['DateTime']>;
    containsi?: InputMaybe<Scalars['DateTime']>;
    endsWith?: InputMaybe<Scalars['DateTime']>;
    eq?: InputMaybe<Scalars['DateTime']>;
    gt?: InputMaybe<Scalars['DateTime']>;
    gte?: InputMaybe<Scalars['DateTime']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    lt?: InputMaybe<Scalars['DateTime']>;
    lte?: InputMaybe<Scalars['DateTime']>;
    ne?: InputMaybe<Scalars['DateTime']>;
    not?: InputMaybe<DateTimeFilterInput>;
    notContains?: InputMaybe<Scalars['DateTime']>;
    notContainsi?: InputMaybe<Scalars['DateTime']>;
    notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    notNull?: InputMaybe<Scalars['Boolean']>;
    null?: InputMaybe<Scalars['Boolean']>;
    or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    startsWith?: InputMaybe<Scalars['DateTime']>;
};

export type DevBlog = {
    attributes: {
        mainPageHeaderTitle: string;
        title?: string;
        description?: string;
        date?: date;
        slug?: string;
        imgLink: ImageProps['src'];
        tag: string;
    };
};
export type Paths = {
    slug?: string;
};
export type DevBlogEntity = {
    __typename?: 'DevBlogEntity';
    attributes?: Maybe<DevBlog>;
    id?: Maybe<Scalars['ID']>;
};

export type DevBlogEntityResponse = {
    __typename?: 'DevBlogEntityResponse';
    data?: Maybe<DevBlogEntity>;
};

export type DevBlogEntityResponseCollection = {
    __typename?: 'DevBlogEntityResponseCollection';
    data: Array<DevBlogEntity>;
    meta: ResponseCollectionMeta;
};

export type DevBlogFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<DevBlogFiltersInput>>>;
    createdAt?: InputMaybe<DateTimeFilterInput>;
    date?: InputMaybe<DateFilterInput>;
    description?: InputMaybe<StringFilterInput>;
    id?: InputMaybe<IdFilterInput>;
    imgLink?: InputMaybe<StringFilterInput>;
    mainPageHeaderTitle?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<DevBlogFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<DevBlogFiltersInput>>>;
    publishedAt?: InputMaybe<DateTimeFilterInput>;
    slug?: InputMaybe<StringFilterInput>;
    tag?: InputMaybe<StringFilterInput>;
    title?: InputMaybe<StringFilterInput>;
    updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type DevBlogInput = {
    date?: InputMaybe<Scalars['Date']>;
    description?: InputMaybe<Scalars['String']>;
    imgLink?: InputMaybe<Scalars['String']>;
    mainPageHeaderTitle?: InputMaybe<Scalars['String']>;
    publishedAt?: InputMaybe<Scalars['DateTime']>;
    slug?: InputMaybe<Scalars['String']>;
    tag?: InputMaybe<Scalars['String']>;
    title?: InputMaybe<Scalars['String']>;
};

export type FileInfoInput = {
    alternativeText?: InputMaybe<Scalars['String']>;
    caption?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
    and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
    between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
    contains?: InputMaybe<Scalars['Float']>;
    containsi?: InputMaybe<Scalars['Float']>;
    endsWith?: InputMaybe<Scalars['Float']>;
    eq?: InputMaybe<Scalars['Float']>;
    gt?: InputMaybe<Scalars['Float']>;
    gte?: InputMaybe<Scalars['Float']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
    lt?: InputMaybe<Scalars['Float']>;
    lte?: InputMaybe<Scalars['Float']>;
    ne?: InputMaybe<Scalars['Float']>;
    not?: InputMaybe<FloatFilterInput>;
    notContains?: InputMaybe<Scalars['Float']>;
    notContainsi?: InputMaybe<Scalars['Float']>;
    notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
    notNull?: InputMaybe<Scalars['Boolean']>;
    null?: InputMaybe<Scalars['Boolean']>;
    or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
    startsWith?: InputMaybe<Scalars['Float']>;
};

export type GenericMorph =
    | Article
    | ComponentContentRichTextComponentContentRichText
    | ComponentElTxtElTxt
    | ComponentFooterComponentFooter
    | ComponentHeadercompHeader
    | ComponentImgSliderImgSlider
    | ComponentSlugPathSlug
    | ComponentTextElementComponentTextElement
    | ComponentTitleDescCompTitleDesc
    | Countdown
    | DevBlog
    | HeroTitleDesc
    | I18NLocale
    | ImgSliderComp
    | UploadFile
    | UsersPermissionsPermission
    | UsersPermissionsRole
    | UsersPermissionsUser;

export type HeroTitleDesc = {
    __typename?: 'HeroTitleDesc';
    createdAt?: Maybe<Scalars['DateTime']>;
    description?: Maybe<Scalars['String']>;
    publishedAt?: Maybe<Scalars['DateTime']>;
    title?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
};

export type HeroTitleDescEntity = {
    __typename?: 'HeroTitleDescEntity';
    attributes?: Maybe<HeroTitleDesc>;
    id?: Maybe<Scalars['ID']>;
};

export type HeroTitleDescEntityResponse = {
    __typename?: 'HeroTitleDescEntityResponse';
    data?: Maybe<HeroTitleDescEntity>;
};

export type HeroTitleDescEntityResponseCollection = {
    __typename?: 'HeroTitleDescEntityResponseCollection';
    data: Array<HeroTitleDescEntity>;
    meta: ResponseCollectionMeta;
};

export type HeroTitleDescFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<HeroTitleDescFiltersInput>>>;
    createdAt?: InputMaybe<DateTimeFilterInput>;
    description?: InputMaybe<StringFilterInput>;
    id?: InputMaybe<IdFilterInput>;
    not?: InputMaybe<HeroTitleDescFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<HeroTitleDescFiltersInput>>>;
    publishedAt?: InputMaybe<DateTimeFilterInput>;
    title?: InputMaybe<StringFilterInput>;
    updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type HeroTitleDescInput = {
    description?: InputMaybe<Scalars['String']>;
    publishedAt?: InputMaybe<Scalars['DateTime']>;
    title?: InputMaybe<Scalars['String']>;
};

export type I18NLocale = {
    __typename?: 'I18NLocale';
    code?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    name?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
    __typename?: 'I18NLocaleEntity';
    attributes?: Maybe<I18NLocale>;
    id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
    __typename?: 'I18NLocaleEntityResponse';
    data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
    __typename?: 'I18NLocaleEntityResponseCollection';
    data: Array<I18NLocaleEntity>;
    meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
    code?: InputMaybe<StringFilterInput>;
    createdAt?: InputMaybe<DateTimeFilterInput>;
    id?: InputMaybe<IdFilterInput>;
    name?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<I18NLocaleFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
    updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
    and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    contains?: InputMaybe<Scalars['ID']>;
    containsi?: InputMaybe<Scalars['ID']>;
    endsWith?: InputMaybe<Scalars['ID']>;
    eq?: InputMaybe<Scalars['ID']>;
    gt?: InputMaybe<Scalars['ID']>;
    gte?: InputMaybe<Scalars['ID']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    lt?: InputMaybe<Scalars['ID']>;
    lte?: InputMaybe<Scalars['ID']>;
    ne?: InputMaybe<Scalars['ID']>;
    not?: InputMaybe<IdFilterInput>;
    notContains?: InputMaybe<Scalars['ID']>;
    notContainsi?: InputMaybe<Scalars['ID']>;
    notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    notNull?: InputMaybe<Scalars['Boolean']>;
    null?: InputMaybe<Scalars['Boolean']>;
    or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    startsWith?: InputMaybe<Scalars['ID']>;
};

export type ImgSliderComp = {
    __typename?: 'ImgSliderComp';
    createdAt?: Maybe<Scalars['DateTime']>;
    imgObj?: Maybe<Array<Maybe<ComponentImgSliderImgSlider>>>;
    publishedAt?: Maybe<Scalars['DateTime']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ImgSliderCompImgObjArgs = {
    filters?: InputMaybe<ComponentImgSliderImgSliderFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ImgSliderCompEntity = {
    __typename?: 'ImgSliderCompEntity';
    attributes?: Maybe<ImgSliderComp>;
    id?: Maybe<Scalars['ID']>;
};

export type ImgSliderCompEntityResponse = {
    __typename?: 'ImgSliderCompEntityResponse';
    data?: Maybe<ImgSliderCompEntity>;
};

export type ImgSliderCompEntityResponseCollection = {
    __typename?: 'ImgSliderCompEntityResponseCollection';
    data: Array<ImgSliderCompEntity>;
    meta: ResponseCollectionMeta;
};

export type ImgSliderCompFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<ImgSliderCompFiltersInput>>>;
    createdAt?: InputMaybe<DateTimeFilterInput>;
    id?: InputMaybe<IdFilterInput>;
    not?: InputMaybe<ImgSliderCompFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<ImgSliderCompFiltersInput>>>;
    publishedAt?: InputMaybe<DateTimeFilterInput>;
    updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ImgSliderCompInput = {
    imgObj?: InputMaybe<Array<InputMaybe<ComponentImgSliderImgSliderInput>>>;
    publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type IntFilterInput = {
    and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
    between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
    contains?: InputMaybe<Scalars['Int']>;
    containsi?: InputMaybe<Scalars['Int']>;
    endsWith?: InputMaybe<Scalars['Int']>;
    eq?: InputMaybe<Scalars['Int']>;
    gt?: InputMaybe<Scalars['Int']>;
    gte?: InputMaybe<Scalars['Int']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
    lt?: InputMaybe<Scalars['Int']>;
    lte?: InputMaybe<Scalars['Int']>;
    ne?: InputMaybe<Scalars['Int']>;
    not?: InputMaybe<IntFilterInput>;
    notContains?: InputMaybe<Scalars['Int']>;
    notContainsi?: InputMaybe<Scalars['Int']>;
    notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
    notNull?: InputMaybe<Scalars['Boolean']>;
    null?: InputMaybe<Scalars['Boolean']>;
    or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
    startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
    and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
    between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
    contains?: InputMaybe<Scalars['JSON']>;
    containsi?: InputMaybe<Scalars['JSON']>;
    endsWith?: InputMaybe<Scalars['JSON']>;
    eq?: InputMaybe<Scalars['JSON']>;
    gt?: InputMaybe<Scalars['JSON']>;
    gte?: InputMaybe<Scalars['JSON']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
    lt?: InputMaybe<Scalars['JSON']>;
    lte?: InputMaybe<Scalars['JSON']>;
    ne?: InputMaybe<Scalars['JSON']>;
    not?: InputMaybe<JsonFilterInput>;
    notContains?: InputMaybe<Scalars['JSON']>;
    notContainsi?: InputMaybe<Scalars['JSON']>;
    notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
    notNull?: InputMaybe<Scalars['Boolean']>;
    null?: InputMaybe<Scalars['Boolean']>;
    or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
    startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Mutation = {
    __typename?: 'Mutation';
    createArticle?: Maybe<ArticleEntityResponse>;
    createCountdown?: Maybe<CountdownEntityResponse>;
    createDevBlog?: Maybe<DevBlogEntityResponse>;
    createHeroTitleDesc?: Maybe<HeroTitleDescEntityResponse>;
    createImgSliderComp?: Maybe<ImgSliderCompEntityResponse>;
    createUploadFile?: Maybe<UploadFileEntityResponse>;
    /** Create a new role */
    createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
    /** Create a new user */
    createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
    deleteArticle?: Maybe<ArticleEntityResponse>;
    deleteCountdown?: Maybe<CountdownEntityResponse>;
    deleteDevBlog?: Maybe<DevBlogEntityResponse>;
    deleteHeroTitleDesc?: Maybe<HeroTitleDescEntityResponse>;
    deleteImgSliderComp?: Maybe<ImgSliderCompEntityResponse>;
    deleteUploadFile?: Maybe<UploadFileEntityResponse>;
    /** Delete an existing role */
    deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
    /** Update an existing user */
    deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
    /** Confirm an email users email address */
    emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
    /** Request a reset password token */
    forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
    login: UsersPermissionsLoginPayload;
    multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
    /** Register a user */
    register: UsersPermissionsLoginPayload;
    removeFile?: Maybe<UploadFileEntityResponse>;
    /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
    resetPassword?: Maybe<UsersPermissionsLoginPayload>;
    updateArticle?: Maybe<ArticleEntityResponse>;
    updateCountdown?: Maybe<CountdownEntityResponse>;
    updateDevBlog?: Maybe<DevBlogEntityResponse>;
    updateFileInfo: UploadFileEntityResponse;
    updateHeroTitleDesc?: Maybe<HeroTitleDescEntityResponse>;
    updateImgSliderComp?: Maybe<ImgSliderCompEntityResponse>;
    updateUploadFile?: Maybe<UploadFileEntityResponse>;
    /** Update an existing role */
    updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
    /** Update an existing user */
    updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
    upload: UploadFileEntityResponse;
};

export type MutationCreateArticleArgs = {
    data: ArticleInput;
};

export type MutationCreateCountdownArgs = {
    data: CountdownInput;
};

export type MutationCreateDevBlogArgs = {
    data: DevBlogInput;
};

export type MutationCreateHeroTitleDescArgs = {
    data: HeroTitleDescInput;
};

export type MutationCreateImgSliderCompArgs = {
    data: ImgSliderCompInput;
};

export type MutationCreateUploadFileArgs = {
    data: UploadFileInput;
};

export type MutationCreateUsersPermissionsRoleArgs = {
    data: UsersPermissionsRoleInput;
};

export type MutationCreateUsersPermissionsUserArgs = {
    data: UsersPermissionsUserInput;
};

export type MutationDeleteArticleArgs = {
    id: Scalars['ID'];
};

export type MutationDeleteCountdownArgs = {
    id: Scalars['ID'];
};

export type MutationDeleteDevBlogArgs = {
    id: Scalars['ID'];
};

export type MutationDeleteHeroTitleDescArgs = {
    id: Scalars['ID'];
};

export type MutationDeleteImgSliderCompArgs = {
    id: Scalars['ID'];
};

export type MutationDeleteUploadFileArgs = {
    id: Scalars['ID'];
};

export type MutationDeleteUsersPermissionsRoleArgs = {
    id: Scalars['ID'];
};

export type MutationDeleteUsersPermissionsUserArgs = {
    id: Scalars['ID'];
};

export type MutationEmailConfirmationArgs = {
    confirmation: Scalars['String'];
};

export type MutationForgotPasswordArgs = {
    email: Scalars['String'];
};

export type MutationLoginArgs = {
    input: UsersPermissionsLoginInput;
};

export type MutationMultipleUploadArgs = {
    field?: InputMaybe<Scalars['String']>;
    files: Array<InputMaybe<Scalars['Upload']>>;
    ref?: InputMaybe<Scalars['String']>;
    refId?: InputMaybe<Scalars['ID']>;
};

export type MutationRegisterArgs = {
    input: UsersPermissionsRegisterInput;
};

export type MutationRemoveFileArgs = {
    id: Scalars['ID'];
};

export type MutationResetPasswordArgs = {
    code: Scalars['String'];
    password: Scalars['String'];
    passwordConfirmation: Scalars['String'];
};

export type MutationUpdateArticleArgs = {
    data: ArticleInput;
    id: Scalars['ID'];
};

export type MutationUpdateCountdownArgs = {
    data: CountdownInput;
    id: Scalars['ID'];
};

export type MutationUpdateDevBlogArgs = {
    data: DevBlogInput;
    id: Scalars['ID'];
};

export type MutationUpdateFileInfoArgs = {
    id: Scalars['ID'];
    info?: InputMaybe<FileInfoInput>;
};

export type MutationUpdateHeroTitleDescArgs = {
    data: HeroTitleDescInput;
    id: Scalars['ID'];
};

export type MutationUpdateImgSliderCompArgs = {
    data: ImgSliderCompInput;
    id: Scalars['ID'];
};

export type MutationUpdateUploadFileArgs = {
    data: UploadFileInput;
    id: Scalars['ID'];
};

export type MutationUpdateUsersPermissionsRoleArgs = {
    data: UsersPermissionsRoleInput;
    id: Scalars['ID'];
};

export type MutationUpdateUsersPermissionsUserArgs = {
    data: UsersPermissionsUserInput;
    id: Scalars['ID'];
};

export type MutationUploadArgs = {
    field?: InputMaybe<Scalars['String']>;
    file: Scalars['Upload'];
    info?: InputMaybe<FileInfoInput>;
    ref?: InputMaybe<Scalars['String']>;
    refId?: InputMaybe<Scalars['ID']>;
};

export type Pagination = {
    __typename?: 'Pagination';
    page: Scalars['Int'];
    pageCount: Scalars['Int'];
    pageSize: Scalars['Int'];
    total: Scalars['Int'];
};

export type PaginationArg = {
    limit?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
    pageSize?: InputMaybe<Scalars['Int']>;
    start?: InputMaybe<Scalars['Int']>;
};

export enum PublicationState {
    Live = 'LIVE',
    Preview = 'PREVIEW',
}

export type Query = {
    __typename?: 'Query';
    article?: Maybe<ArticleEntityResponse>;
    articles?: Maybe<ArticleEntityResponseCollection>;
    countdown?: Maybe<CountdownEntityResponse>;
    countdowns?: Maybe<CountdownEntityResponseCollection>;
    devBlog?: Maybe<DevBlogEntityResponse>;
    devBlogs?: Maybe<DevBlogEntityResponseCollection>;
    heroTitleDesc?: Maybe<HeroTitleDescEntityResponse>;
    heroTitleDescs?: Maybe<HeroTitleDescEntityResponseCollection>;
    i18NLocale?: Maybe<I18NLocaleEntityResponse>;
    i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
    imgSliderComp?: Maybe<ImgSliderCompEntityResponse>;
    imgSliderComps?: Maybe<ImgSliderCompEntityResponseCollection>;
    me?: Maybe<UsersPermissionsMe>;
    uploadFile?: Maybe<UploadFileEntityResponse>;
    uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
    usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
    usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
    usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
    usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};

export type QueryArticleArgs = {
    id?: InputMaybe<Scalars['ID']>;
};

export type QueryArticlesArgs = {
    filters?: InputMaybe<ArticleFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    publicationState?: InputMaybe<PublicationState>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryCountdownArgs = {
    id?: InputMaybe<Scalars['ID']>;
};

export type QueryCountdownsArgs = {
    filters?: InputMaybe<CountdownFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    publicationState?: InputMaybe<PublicationState>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryDevBlogArgs = {
    id?: InputMaybe<Scalars['ID']>;
};

export type QueryDevBlogsArgs = {
    filters?: InputMaybe<DevBlogFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    publicationState?: InputMaybe<PublicationState>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryHeroTitleDescArgs = {
    id?: InputMaybe<Scalars['ID']>;
};

export type QueryHeroTitleDescsArgs = {
    filters?: InputMaybe<HeroTitleDescFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    publicationState?: InputMaybe<PublicationState>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryI18NLocaleArgs = {
    id?: InputMaybe<Scalars['ID']>;
};

export type QueryI18NLocalesArgs = {
    filters?: InputMaybe<I18NLocaleFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryImgSliderCompArgs = {
    id?: InputMaybe<Scalars['ID']>;
};

export type QueryImgSliderCompsArgs = {
    filters?: InputMaybe<ImgSliderCompFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    publicationState?: InputMaybe<PublicationState>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryUploadFileArgs = {
    id?: InputMaybe<Scalars['ID']>;
};

export type QueryUploadFilesArgs = {
    filters?: InputMaybe<UploadFileFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryUsersPermissionsRoleArgs = {
    id?: InputMaybe<Scalars['ID']>;
};

export type QueryUsersPermissionsRolesArgs = {
    filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryUsersPermissionsUserArgs = {
    id?: InputMaybe<Scalars['ID']>;
};

export type QueryUsersPermissionsUsersArgs = {
    filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
    __typename?: 'ResponseCollectionMeta';
    pagination: Pagination;
};

export type StringFilterInput = {
    and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    contains?: InputMaybe<Scalars['String']>;
    containsi?: InputMaybe<Scalars['String']>;
    endsWith?: InputMaybe<Scalars['String']>;
    eq?: InputMaybe<Scalars['String']>;
    gt?: InputMaybe<Scalars['String']>;
    gte?: InputMaybe<Scalars['String']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    lt?: InputMaybe<Scalars['String']>;
    lte?: InputMaybe<Scalars['String']>;
    ne?: InputMaybe<Scalars['String']>;
    not?: InputMaybe<StringFilterInput>;
    notContains?: InputMaybe<Scalars['String']>;
    notContainsi?: InputMaybe<Scalars['String']>;
    notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    notNull?: InputMaybe<Scalars['Boolean']>;
    null?: InputMaybe<Scalars['Boolean']>;
    or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    startsWith?: InputMaybe<Scalars['String']>;
};

export type UploadFile = {
    __typename?: 'UploadFile';
    alternativeText?: Maybe<Scalars['String']>;
    caption?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    ext?: Maybe<Scalars['String']>;
    formats?: Maybe<Scalars['JSON']>;
    hash: Scalars['String'];
    height?: Maybe<Scalars['Int']>;
    mime: Scalars['String'];
    name: Scalars['String'];
    previewUrl?: Maybe<Scalars['String']>;
    provider: Scalars['String'];
    provider_metadata?: Maybe<Scalars['JSON']>;
    related?: Maybe<Array<Maybe<GenericMorph>>>;
    size: Scalars['Float'];
    updatedAt?: Maybe<Scalars['DateTime']>;
    url: Scalars['String'];
    width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
    __typename?: 'UploadFileEntity';
    attributes?: Maybe<UploadFile>;
    id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
    __typename?: 'UploadFileEntityResponse';
    data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
    __typename?: 'UploadFileEntityResponseCollection';
    data: Array<UploadFileEntity>;
    meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
    alternativeText?: InputMaybe<StringFilterInput>;
    and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
    caption?: InputMaybe<StringFilterInput>;
    createdAt?: InputMaybe<DateTimeFilterInput>;
    ext?: InputMaybe<StringFilterInput>;
    formats?: InputMaybe<JsonFilterInput>;
    hash?: InputMaybe<StringFilterInput>;
    height?: InputMaybe<IntFilterInput>;
    id?: InputMaybe<IdFilterInput>;
    mime?: InputMaybe<StringFilterInput>;
    name?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<UploadFileFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
    previewUrl?: InputMaybe<StringFilterInput>;
    provider?: InputMaybe<StringFilterInput>;
    provider_metadata?: InputMaybe<JsonFilterInput>;
    size?: InputMaybe<FloatFilterInput>;
    updatedAt?: InputMaybe<DateTimeFilterInput>;
    url?: InputMaybe<StringFilterInput>;
    width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
    alternativeText?: InputMaybe<Scalars['String']>;
    caption?: InputMaybe<Scalars['String']>;
    ext?: InputMaybe<Scalars['String']>;
    formats?: InputMaybe<Scalars['JSON']>;
    hash?: InputMaybe<Scalars['String']>;
    height?: InputMaybe<Scalars['Int']>;
    mime?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    previewUrl?: InputMaybe<Scalars['String']>;
    provider?: InputMaybe<Scalars['String']>;
    provider_metadata?: InputMaybe<Scalars['JSON']>;
    size?: InputMaybe<Scalars['Float']>;
    url?: InputMaybe<Scalars['String']>;
    width?: InputMaybe<Scalars['Int']>;
};

export type UsersPermissionsCreateRolePayload = {
    __typename?: 'UsersPermissionsCreateRolePayload';
    ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
    __typename?: 'UsersPermissionsDeleteRolePayload';
    ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
    identifier: Scalars['String'];
    password: Scalars['String'];
    provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
    __typename?: 'UsersPermissionsLoginPayload';
    jwt?: Maybe<Scalars['String']>;
    user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
    __typename?: 'UsersPermissionsMe';
    blocked?: Maybe<Scalars['Boolean']>;
    confirmed?: Maybe<Scalars['Boolean']>;
    email?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    role?: Maybe<UsersPermissionsMeRole>;
    username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
    __typename?: 'UsersPermissionsMeRole';
    description?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    name: Scalars['String'];
    type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
    __typename?: 'UsersPermissionsPasswordPayload';
    ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
    __typename?: 'UsersPermissionsPermission';
    action: Scalars['String'];
    createdAt?: Maybe<Scalars['DateTime']>;
    role?: Maybe<UsersPermissionsRoleEntityResponse>;
    updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
    __typename?: 'UsersPermissionsPermissionEntity';
    attributes?: Maybe<UsersPermissionsPermission>;
    id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
    action?: InputMaybe<StringFilterInput>;
    and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
    createdAt?: InputMaybe<DateTimeFilterInput>;
    id?: InputMaybe<IdFilterInput>;
    not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
    role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
    updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
    __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
    data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
    email: Scalars['String'];
    password: Scalars['String'];
    username: Scalars['String'];
};

export type UsersPermissionsRole = {
    __typename?: 'UsersPermissionsRole';
    createdAt?: Maybe<Scalars['DateTime']>;
    description?: Maybe<Scalars['String']>;
    name: Scalars['String'];
    permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
    type?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};

export type UsersPermissionsRolePermissionsArgs = {
    filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleUsersArgs = {
    filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
    __typename?: 'UsersPermissionsRoleEntity';
    attributes?: Maybe<UsersPermissionsRole>;
    id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
    __typename?: 'UsersPermissionsRoleEntityResponse';
    data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
    __typename?: 'UsersPermissionsRoleEntityResponseCollection';
    data: Array<UsersPermissionsRoleEntity>;
    meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
    createdAt?: InputMaybe<DateTimeFilterInput>;
    description?: InputMaybe<StringFilterInput>;
    id?: InputMaybe<IdFilterInput>;
    name?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
    permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
    type?: InputMaybe<StringFilterInput>;
    updatedAt?: InputMaybe<DateTimeFilterInput>;
    users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
    description?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    type?: InputMaybe<Scalars['String']>;
    users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
    __typename?: 'UsersPermissionsUpdateRolePayload';
    ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
    __typename?: 'UsersPermissionsUser';
    blocked?: Maybe<Scalars['Boolean']>;
    confirmed?: Maybe<Scalars['Boolean']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    email: Scalars['String'];
    provider?: Maybe<Scalars['String']>;
    role?: Maybe<UsersPermissionsRoleEntityResponse>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
    __typename?: 'UsersPermissionsUserEntity';
    attributes?: Maybe<UsersPermissionsUser>;
    id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
    __typename?: 'UsersPermissionsUserEntityResponse';
    data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
    __typename?: 'UsersPermissionsUserEntityResponseCollection';
    data: Array<UsersPermissionsUserEntity>;
    meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
    blocked?: InputMaybe<BooleanFilterInput>;
    confirmationToken?: InputMaybe<StringFilterInput>;
    confirmed?: InputMaybe<BooleanFilterInput>;
    createdAt?: InputMaybe<DateTimeFilterInput>;
    email?: InputMaybe<StringFilterInput>;
    id?: InputMaybe<IdFilterInput>;
    not?: InputMaybe<UsersPermissionsUserFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
    password?: InputMaybe<StringFilterInput>;
    provider?: InputMaybe<StringFilterInput>;
    resetPasswordToken?: InputMaybe<StringFilterInput>;
    role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
    updatedAt?: InputMaybe<DateTimeFilterInput>;
    username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
    blocked?: InputMaybe<Scalars['Boolean']>;
    confirmationToken?: InputMaybe<Scalars['String']>;
    confirmed?: InputMaybe<Scalars['Boolean']>;
    email?: InputMaybe<Scalars['String']>;
    password?: InputMaybe<Scalars['String']>;
    provider?: InputMaybe<Scalars['String']>;
    resetPasswordToken?: InputMaybe<Scalars['String']>;
    role?: InputMaybe<Scalars['ID']>;
    username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
    __typename?: 'UsersPermissionsUserRelationResponseCollection';
    data: Array<UsersPermissionsUserEntity>;
};

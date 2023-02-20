import { Page } from "@playwright/test";
import { Locator } from "../types";

interface Direction {
    x?: number;
    y?: number;
}

interface OffSet {
    left: number;
    right: number;
    top: number;
    bottom: number;
}

interface Size{
    width?: number;
    height?: number;
}

/**
 * Function that scrolls the page using javascript
 * @param {Direction}  direction - A {x,y} param.
 */
export async function scrollBy (page: Page, direction: Direction): Promise<void> {
    await page.evaluate(([x, y]) => window.scrollBy(x, y), [direction.x || 0, direction.y || 0]);
}

/**
 * Function that returns an attribute of an element find using the given locator
 * @param {string}  locator - Locator of the element.
 * @param {string}  property - Attribute to get.
 * @returns {Promise<string>}
 */
export async function getAttributeOfElement (page: Page, locator: string, property: string) : Promise<string | null | undefined> {
    const el = await page.$(locator);
    return await el?.getAttribute(property);
}

/**
 * Function that returns an attribute of an element which is a child of the parent.
 * @param {string}  parentLocator - Locator of the parent element.
 * @param {childLocator}  locator - Locator of the child element.
 * @param {string}  property - Attribute to get.
 * @returns {Promise<string>}
 */
export async function getAttributeOfSubElement (page: Page, parentLocator: string, childLocator: string, property: string) : Promise<string | null | undefined> {
    const parent = await page.waitForSelector(parentLocator, { timeout: 1000 });
    if (parent) {
        const child = await parent.waitForSelector(childLocator, { timeout: 1000 });
        return await child.getAttribute(property);
    }
    return 'Element not found';
}

/**
 * Function that returns the offset {left, right, top, bottom} of an object relative to the viewport.
 * @param {string}  locator - Locator of the element.
 * @returns {Promise<OffSet>}
 */
export async function getOffSet (page: Page, locator: string): Promise<OffSet> {
    const offset: OffSet = await page.$eval(locator, el => {
        const rect = el.getBoundingClientRect();
        return {
            top: rect.top,
            left: rect.left,
            right: rect.right,
            bottom: rect.bottom
        };
    });
    return offset;
}

/**
 * Function that returns that verifies that the request attribute exist before calling it.
 * @param {string}  locator - Locator of the element.
 * @param {string}  attribute - Attribute to validate.
 * @returns {Promise<OffSet>}
 */
export async function getAttributeSafely (page: Page, locator: string, attribute: string): Promise<string> {
    await page.waitForSelector(locator);
    await page.waitForFunction(async (element) => element?.getAttribute('href') !== '', await page.$(locator));
    return await page.getAttribute(locator, attribute) || '';
}

/**
 * Function that returns the offset {left, right, top, bottom} of an object relative to the viewport.
 * @param {Page}  page - The current browser.
 * @param {string}  locator - The element to locate.
 * @returns {Promise<boolean>}
 */
export async function isFocused (page: Page, locator: string): Promise<boolean> {
    return await page.$eval(
        locator,
        (el) => el === document.activeElement
    );
}

/**
 * Function that sleeps for a fixed time
 * @param {number}  time - Locator of the element.
 * @returns {Promise<void>}
 */
export async function sleep (time: number): Promise<void> {
    return new Promise(resolve =>
        setTimeout(() => resolve(), time));
}

/**
 * Function that verifis if an element is enabled
 * @param {Page}  page - The current browser.
 * @param {string}  locator - The element to verify.
 * @returns {Promise<void>}
 */
export async function isEnabled (page: Page, locator: string): Promise<boolean> {
    try {
        const el = await page.$(locator);
        await el?.waitForElementState('enabled');
        return true;
    } catch {
        return false;
    }
}

/**
 * Function that returns the size of a rendered element.
 * @param {Page}  page - The current browser.
 * @param {string}  locator - Locator of the element.
 * @returns {Promise<Size>}
 */
export async function getElementSize (page: Page, locator: string) : Promise<Size| undefined> {
    const el = await page.$(locator);
    const box = await el!.boundingBox();
    return { width: box?.width, height: box?.height };
}

export async function clickAndWait (page: Page, element: Locator, time: number = 500):Promise<void> {
  await page.waitForLoadState('networkidle');
  await page.locator(element).first().click({ delay: 500, force: true });
  await sleep(time);
  await page.waitForLoadState('networkidle');
}